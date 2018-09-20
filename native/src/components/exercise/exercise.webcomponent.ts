import { html, render } from 'lit-html';
import { when } from 'lit-html/directives/when';

import { exos, Exercise } from './../../exos/index';

export class MktdExercise extends HTMLElement {
  useShadowDom = true;

  private shadowStyle = require('!!raw-loader!./style.css');

  private _num: number | null = null;
  private get num(): number | null {
    return this._num;
  }
  private set num(newNum: number | null) {
    this._num = newNum;
    this.update();
  }
  private get exo(): Exercise | null {
    return typeof this.num === "number" ? exos[this.num] : null;
  }
  private get type(): string {
    return this.exo ? this.exo.type : '';
  }
  private get name(): string {
    return this.exo ? this.exo.name : 'Undefined';
  }

  private _open = false;
  private get open(): boolean {
    return this._open;
  }
  private set open(newOpen: boolean) {
    this._open = newOpen;
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

  // Life cycles
  connectedCallback() {
    this.update();
  }

  // Attribute
  static observedAttributes: string[] = ['num', 'open'];
  attributeChangedCallback(attrName: string, oldValue: string | null, newValue: string | null) {
    switch (attrName) {
      case 'num':
        const tryCast = +newValue
        this.num = isNaN(tryCast) ? null : tryCast;
        break;
      case 'open':
        this.open = newValue === 'true';
        break;
    }
  }

  // Render
  update() {
    render(this.template(), this.host);
  }

  template() {
    const { shadowStyle, open, type, num, name, exo } = this;
    const nope = () => html`Nope`;
    const article = () => html`
        <details open=${open}>
          <summary>
            <h2>
              ${when(type, () => html`
              <span class="type">${type}</span>`, () => html``)}
              <span class="num">${num}</span>
              <span class="name">${name}</span>
            </h2>
          </summary>
          ${when(exo !== null && exo.readme, () => html`
          <mktd-markdown path=${exo.readme}></mktd-markdown>`, () => html``)}
        </details>`;

    return html`
            <style>${shadowStyle}</style>
            <article>${when(num === null, nope, article)}</article>`;
  }
}