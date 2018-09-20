import { html, render, Directive,  NodePart } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { until } from 'lit-html/directives/until';
import * as marked from 'marked';
import * as Prism from 'prismjs';

// Use PrismJS as syntax highlighter
marked.setOptions({
    highlight: (code, lang) => Prism.highlight(code, Prism.languages[lang], Prism.languages[lang])
});

export class MktdMarkdown extends HTMLElement {
    useShadowDom = true;

    private shadowStyle = require('!!raw-loader!./style.css');

    private _mdContent: Promise<Directive<NodePart>>;
    private get mdContent(): Promise<Directive<NodePart>> {
        return this._mdContent;
    }
    private set mdContent(newContent: Promise<Directive<NodePart>>) {
        this._mdContent = newContent;
        this.update();
    }

    constructor() {
        super();
        if (this.useShadowDom) {
            this.attachShadow({ mode: 'open' });
        }
    }

    get host() {
        return (this.useShadowDom) ? this.shadowRoot : this;
    }

    // 
    static observedAttributes: string[] = ['path'];

    // Life cycles
    connectedCallback() {
        this.update();
    }

    attributeChangedCallback(attrName: string, oldValue: string | null, newValue: string | null) {
        switch (attrName) {
            case 'path':
                this.mdContent = fetch(newValue)
                    .then(res => res.text())
                    .then(md => marked(md))
                    .then(unsafeHTML);
                break;
        }
    }

    // Render
    update() {
        render(this.template(), this.host);
    }

    template() {
        const { shadowStyle, mdContent } = this;
        return html`
            <style>${shadowStyle}</style>
            <article class="markdown">
                ${until(mdContent, html`<div class="loading">Loading</div>`)}
            </article>`;
    }
}