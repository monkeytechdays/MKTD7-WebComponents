import { TestWindow } from '@stencil/core/testing';
import { StencilHello } from './stencil-hello';
import { StencilHelloSolution } from './stencil-hello.solution';

const ComponentToBeTested = process.env.IS_SOLUTION
    ? StencilHelloSolution
    : StencilHello;
const html = process.env.IS_SOLUTION
    ? '<stencil-hello-solution></stencil-hello-solution>'
    : '<stencil-hello></stencil-hello>';

describe('03 stencil-hello', () => {
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

        it('should display default values', async () => {
            expect(element.innerHTML.trim()).toEqual('<h1>Hello John Doe!</h1>');
        });

        it('should update firstname', async () => {
            element.firstname = 'Jane';
            await testWindow.flush();
            expect(element.innerHTML.trim()).toEqual('<h1>Hello Jane Doe!</h1>');
        });

        it('should update lastname', async () => {
            element.lastname = 'Wayne';
            await testWindow.flush();
            expect(element.innerHTML.trim()).toEqual('<h1>Hello John Wayne!</h1>');
        });

        it('should update firstname & lastname', async () => {
            element.firstname = 'Jane';
            element.lastname = 'Wayne';
            await testWindow.flush();
            expect(element.innerHTML.trim()).toEqual('<h1>Hello Jane Wayne!</h1>');
        });
    });
});
