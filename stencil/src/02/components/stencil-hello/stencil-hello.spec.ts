import { TestWindow } from '@stencil/core/testing';
import { StencilHello } from './stencil-hello';
import { StencilHelloSolution } from './stencil-hello.solution';

const ComponentToBeTested = process.env.IS_SOLUTION
    ? StencilHelloSolution
    : StencilHello;
const html = process.env.IS_SOLUTION
    ? '<stencil-hello-solution></stencil-hello-solution>'
    : '<stencil-hello></stencil-hello>';

describe('02 stencil-hello', () => {
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

        it('should display 10 after 10 secs', async () => {
            expect(element.innerHTML.trim()).toEqual('<div>0</div>');
            jest.advanceTimersByTime(10000);

            await testWindow.flush();
            expect(element.innerHTML.trim()).toEqual('<div>10</div>');
        });
    });
});
