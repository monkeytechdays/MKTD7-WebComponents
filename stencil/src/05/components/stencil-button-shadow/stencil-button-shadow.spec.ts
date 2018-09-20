import { TestWindow } from '@stencil/core/testing';
import { StencilButtonShadow } from './stencil-button-shadow';
import { StencilButtonShadowSolution } from './stencil-button-shadow.solution';

const ComponentToBeTested = process.env.IS_SOLUTION
    ? StencilButtonShadowSolution
    : StencilButtonShadow;
const html = process.env.IS_SOLUTION
    ? '<stencil-button-shadow-solution></stencil-button-shadow-solution>'
    : '<stencil-button-shadow></stencil-button-shadow>';

describe('05 stencil-button-shadow', () => {
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

        it('should encapsulate the component in a shadowroot', () => {
            // Hack to test shadow dom with jsdom
            // wont be a problem with stencil v0.13 as it uses puppeteer for tests
            expect(ComponentToBeTested.encapsulation).toEqual('shadow');
        });
    });
});
