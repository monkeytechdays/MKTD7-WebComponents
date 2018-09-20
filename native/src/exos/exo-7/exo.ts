import '../../helper';

export class StickyNote extends HTMLElement {

    private stickyNotesTemplate: HTMLTemplateElement;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // TODO 2
    }

    connectedCallback() {
        window.ShadyCSS && window.ShadyCSS.styleElement(this);
        
        // TODO 3
    }

}

export default function () {
    // load style and template using webpack
    const style = require('!!raw-loader!./shadow.css');
    const htmlTemplate = require('!!raw-loader!./template.html');

    // Create template
    const templateElt = document.createElement('template');
    // TODO 1
    document.body.appendChild(templateElt);

    // If we need a polyfill for ShadowDom and CSS
    window['ShadyCSS'] && window['ShadyCSS'].prepareTemplate(templateElt, 'sticky-note');
    
    // Define the custom element
    customElements.define('sticky-note', StickyNote);

    // Create playground content
    const playground = document.querySelector('.playground');
    playground.innerHTML = `
    <sticky-note>
        <!-- TODO 4 -->
    </sticky-note>`;
}