import { html, render } from 'lit-html';

import { prefix } from './../../exos/index';

export class MktdNavbar extends HTMLElement {
    useShadowDom = true;

    private _names: string[] = [];
    private get names(): string[] {
        return this._names;
    }
    private set names(newNames: string[]) {
        this._names = newNames;
        this.update();
    }

    private shadowStyle = require('!!raw-loader!./style.css');

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
    static observedAttributes: string[] = ['names'];

    // Life cycles
    connectedCallback() {
        this.update();
    }

    attributeChangedCallback(attrName: string, oldValue: string | null, newValue: string | null) {
        switch (attrName) {
            case 'names':
                this.names = (newValue || '')
                    .split('|')
                    .map(name => name.trim());
        }
    }

    // Render
    update() {
        render(this.template(), this.host);
    }

    template() {
        const { shadowStyle, names } = this;

        return html`
            <style>${shadowStyle}</style>
            <nav>
                <a href="/">Home</a>
                ${names.map((name, index) =>
                html`<a href="${prefix}${index}">${name}</a>`)}
            </nav>`;
    }

}