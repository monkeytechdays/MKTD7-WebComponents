import { TestWindow } from '@stencil/core/testing';
import { StencilHello } from './stencil-hello';
import { StencilHelloSolution } from './stencil-hello.solution';

const ComponentToBeTested = process.env.IS_SOLUTION
    ? StencilHelloSolution
    : StencilHello;
const html = process.env.IS_SOLUTION
    ? '<stencil-hello-solution></stencil-hello-solution>'
    : '<stencil-hello></stencil-hello>';

describe('01 stencil-hello', () => {
    it('should build', () => {
        expect(new ComponentToBeTested()).toBeTruthy();
    });

    describe('rendering', () => {
        let element: HTMLMyComponentElement;
        let testWindow: TestWindow;
        beforeEach(async () => {
            testWindow = new TestWindow();
            element = await testWindow.load({
                components: [ComponentToBeTested],
                html,
            });
        });

        it('should work without parameters', () => {
            expect(element.innerHTML.trim()).toEqual('<div>Hello World</div>');
        });
    });
});
