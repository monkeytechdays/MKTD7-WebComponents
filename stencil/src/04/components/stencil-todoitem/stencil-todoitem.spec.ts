import { TestWindow } from '@stencil/core/testing';
import { StencilTodoItem } from './stencil-todoitem';
import { StencilTodoItemSolution } from './stencil-todoitem.solution';

const ComponentToBeTested = process.env.IS_SOLUTION
    ? StencilTodoItemSolution
    : StencilTodoItem;
const html = process.env.IS_SOLUTION
    ? '<stencil-todoitem-solution></stencil-todoitem-solution>'
    : '<stencil-todoitem></stencil-todoitem>';

describe('04 stencil-todoitem', () => {
    it('should build', () => {
        expect(new ComponentToBeTested()).toBeTruthy();
    });

    describe('rendering', () => {
        let element: HTMLMyComponentElement;
        let testWindow: TestWindow;
        beforeEach(async () => {
            jest.useFakeTimers();
            testWindow = new TestWindow();
            element = await testWindow.load({
                components: [ComponentToBeTested],
                html,
            });
        });

        it('should have a completed class', async () => {
            expect(element.children[0].classList.contains('completed')).toEqual(false);
            element.completed = true;
            await testWindow.flush();
            expect(element.children[0].classList.contains('completed')).toEqual(true);
        });

        it('should display text in a span', async () => {
            expect(element.querySelector('span').textContent).toEqual('');
            element.text = 'My text';
            await testWindow.flush();
            expect(element.querySelector('span').textContent).toEqual('My text');
        });

        it('should trigger the right event when button clicked', async () => {
            const myEventPromise = new Promise<UIEvent>(resolve => {
                element.addEventListener('todoCompleted', (ev: UIEvent) => {
                    resolve(ev);
                });
            })
            await testWindow.flush();
            element.querySelector('button').click();

            const ev = await myEventPromise;
            expect(ev.type).toBe('todoCompleted');
        });
    });
});
