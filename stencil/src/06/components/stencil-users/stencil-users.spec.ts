import { TestWindow } from '@stencil/core/testing';
import { StencilUsers } from './stencil-users';
import { StencilUsersSolution } from './stencil-users.solution';

const ComponentToBeTested = process.env.IS_SOLUTION
    ? StencilUsersSolution
    : StencilUsers;
const html = process.env.IS_SOLUTION
    ? '<stencil-users-solution></stencil-users-solution>'
    : '<stencil-users></stencil-users>';

describe('06 stencil-users', () => {
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

        it('should display the expected list', async () => {
            expect(element.innerHTML.trim()).toEqual('<stencil-card><span slot=\"title\">Luke Skywalker</span><span slot=\"subtitle\">Tatooine</span><span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis posuere venenatis. Vivamus interdum sed justo nec porta. Sed ac sagittis diam. Praesent vestibulum efficitur porta. Aliquam commodo ultricies nibh, at faucibus orci condimentum non. Proin sed dignissim purus.</span></stencil-card><stencil-card><span slot=\"title\">C-3PO</span><span slot=\"subtitle\">Tatooine</span><span slot=\"content\">Duis eleifend, elit vitae efficitur vestibulum, tellus eros sollicitudin dolor, a bibendum erat mauris vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In laoreet sodales commodo. Donec nec malesuada arcu, et luctus lacus. </span></stencil-card><stencil-card><span slot=\"title\">R2-D2</span><span slot=\"subtitle\">Naboo</span><span slot=\"content\">Duis eleifend, elit vitae efficitur vestibulum, tellus eros sollicitudin dolor, a bibendum erat mauris vitae erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In laoreet sodales commodo. Donec nec malesuada arcu, et luctus lacus. </span></stencil-card><stencil-card><span slot=\"title\">Darth Vader</span><span slot=\"subtitle\">Tatooine</span><span slot=\"content\">Quisque vehicula, velit vel pretium consequat, enim nisl molestie tellus, vel ultricies ligula arcu ac ligula. Duis egestas, est vel lobortis faucibus, urna ligula porttitor sem, ornare faucibus nibh nibh et urna. Morbi ac consequat turpis.</span></stencil-card><stencil-card><span slot=\"title\">Leia Organa</span><span slot=\"subtitle\">Alderaan</span><span slot=\"content\">Sed eleifend sem a nulla finibus, mollis bibendum lacus congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Integer volutpat, metus tempor efficitur euismod, velit risus ultricies ante, quis semper felis est in purus. </span></stencil-card>');
        });
    });
});
