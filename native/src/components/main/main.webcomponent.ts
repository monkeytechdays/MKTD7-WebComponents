import { html, render } from 'lit-html';
import { when } from 'lit-html/directives/when';

import { exos, prefix, Exercise } from '../../exos/index';

export class MktdMain extends HTMLElement {
    useShadowDom = true;

    private shadowStyle = require('!!raw-loader!./style.css');

    private _current: number | null = null;
    private get current(): number | null {
        return this._current;
    }
    private set current(newCurrent: number | null) {
        this._current = newCurrent;
        this.update()
        this.runCode()
    }
    private get exo(): Exercise | null {
        return typeof this.current === "number" ? exos[this.current] : null;
    }

    private get visited(): Exercise[] {
        return exos.slice(0, this.current + 1);
    }

    private ok = false;
    private finish = false;
    private runner: any;

    constructor() {
        super();
        if (this.useShadowDom) {
            this.attachShadow({ mode: 'open' });
        }
    }
    get host() {
        return (this.useShadowDom) ? this.shadowRoot : this;
    }

    // Observe
    static observedAttributes: string[] = ['current'];

    // Life cycles
    connectedCallback() {
        this.update();
    }

    attributeChangedCallback(attrName: string, oldValue: string | null, newValue: string | null) {
        switch (attrName) {
            case 'current':
                const tryCast = +newValue
                this.current = isNaN(tryCast) ? null : tryCast;
                break;
        }
    }

    // Render
    update() {
        render(this.template(), this.host);
    }

    template() {
        const { shadowStyle, current, exo, visited, ok } = this;

        const list = when(exo === null,
            () => html`<a href="${prefix}0" class="start">Click to start</a>`,
            () => html`<mktd-exercise num=${current} open="true"></mktd-exercise>`
        );

        // Next
        const next = when(ok && !this.finish,
            () => html`<a href="${prefix}${this.current + 1}" class="next">Next</a>`,
            () => html``);

        // Finished
        const finished = when(this.finish,
            () => html`<section class="finish">Finished</section>`,
            () => html``);

        return html`<style>${shadowStyle}</style>
        <mktd-navbar names="${visited.map(exo => exo.name).join('|')}"></mktd-navbar>
        ${list}
        ${next}
        ${finished}
        `;
    }

    runCode() {
        const { exo } = this;
        if (exo !== null) {
            console.log('run code', exo.name);
            document.querySelector('.playground').innerHTML = '';

            exo.runner();
            // Eval test
            this.runTest(exo);
        }
    }

    runTest(exo: Exercise) {
        // Clear tests result
        document.querySelector('#mocha').innerHTML = '';
        mocha.suite.suites = [];

        return exo.tests()
            .then(() => {
                this.runner = mocha.run();
                this.runner.on('end', () => this.afterTest())
            });
    }

    afterTest() {
        const { passes, failures } = this.runner.stats
        const hasNoFailures = (passes > 0) && (failures === 0);
        if (this.ok !== hasNoFailures) {
            this.ok = hasNoFailures;
            this.finish = (this.current === (exos.length - 1));
            this.update();
        }
    }
}
