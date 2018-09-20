import '../../helper';

export class StickyNote extends HTMLElement {

    private stickyNotesTemplate: HTMLTemplateElement;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // 2
        this.stickyNotesTemplate = document.querySelector('#sticky-note-template') as HTMLTemplateElement;
    }

    connectedCallback() {
        window.ShadyCSS && window.ShadyCSS.styleElement(this);
        
        // 3
        const cloned = this.stickyNotesTemplate.content.cloneNode(true)
        this.shadowRoot.appendChild(cloned);
    }

}

export default function () {
    // load style and template using webpack
    const style = require('!!raw-loader!./shadow.css');
    const htmlTemplate = require('!!raw-loader!./template.html');

    // Create template
    const templateElt = document.createElement('template');
    // 1
    templateElt.id = 'sticky-note-template';
    templateElt.innerHTML = `
        <style>${style}</style>
        ${htmlTemplate}`;
    document.body.appendChild(templateElt);

    // If we need a polyfill for ShadowDom and CSS
    window['ShadyCSS'] && window['ShadyCSS'].prepareTemplate(templateElt, 'sticky-note');
    
    // Define the custom element
    customElements.define('sticky-note', StickyNote);

    // Create playground content
    const playground = document.querySelector('.playground');
    playground.innerHTML = `
    <sticky-note>
        <!-- 4 -->
        <span slot="content">Plop!</span>
    </sticky-note>`;
}