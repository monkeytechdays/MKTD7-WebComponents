import { TestWindow } from '@stencil/core/testing';
import { StencilTodolist } from './stencil-todolist';
import { StencilTodolistSolution } from './stencil-todolist.solution';
import { StencilTodoItemSolution } from '../stencil-todoitem/stencil-todoitem.solution';

const ComponentToBeTested = process.env.IS_SOLUTION
    ? StencilTodolistSolution
    : StencilTodolist;
const html = process.env.IS_SOLUTION
    ? '<stencil-todolist-solution></stencil-todolist-solution>'
    : '<stencil-todolist></stencil-todolist>';

describe('04 stencil-todolist', () => {
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
                components: [ComponentToBeTested, StencilTodoItemSolution],
                html,
            });
        });

        it('should display the right default content', async () => {
            expect(element.children[0].querySelector('span').textContent).toEqual('Learn about Web Components');
            expect(element.children[1].querySelector('span').textContent).toEqual('Learn about Stencil');
            expect(element.children[2].querySelector('span').textContent).toEqual('Share my knowledge');
        });

        it('should update the state on click', async () => {
            expect(element.children[0].innerHTML.trim()).toEqual('<div class="completed"><button>Toggle</button><span>Learn about Web Components</span></div>');
            element.firstElementChild.querySelector('button').click();
            await testWindow.flush();
            expect(element.children[0].innerHTML.trim()).toEqual('<div class=""><button>Toggle</button><span>Learn about Web Components</span></div>');
        });
    });
});
