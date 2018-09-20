import { html, render } from 'lit-html';

interface Cell {
    i: number;
    j: number;
    dark: boolean;
}

class Checkerboard2 extends HTMLElement {

    private size = 4;
    private dark = 'SaddleBrown';
    private light = 'PapayaWhip';

    get cells(): Cell[] {
        const result: Cell[] = [];
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                result.push({ i, j, dark: (i + j) % 2 === 1 });
            }
        }
        return result;
    }

    constructor() {
        super();
    }

    connectedCallback() {
        // 1
        this.update()
    }

    // 2
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        switch(name) {
            case 'size':
                this.size = +newValue;
                this.update();
                break;
            case 'dark':
                this.dark = newValue;
                this.update();
                break;
            case 'light':
                this.light = newValue;
                this.update();
                break;
            default:
                console.warn('Unhandled attribute:', name);
        }
    }

    // 3
    static get observedAttributes() {return ['size', 'dark', 'light']; }


    update() {
        render(this.template(), this);
    }

    private template() {
        const { size, dark, light } = this;

        const gridTemplate = `repeat(${size}, 1fr)`;
        const gridStyle = `grid-template: ${gridTemplate} / ${gridTemplate}; --dark: ${dark}; --light: ${light}`;
        const cellClass = (cell: Cell) => cell.dark ? 'dark' : 'light';

        return html`
        <div class="checkerboard" style=${gridStyle}>
            ${this.cells.map((cell, index) =>
                html`<div class=${cellClass(cell)}>${index}</div>`
            )}
        </div>`;
    }

}

export default function () {
    customElements.define('hello-checkerboard2', Checkerboard2);

    const playground = document.querySelector('.playground');
    const updateAttribute = (attr: string) => (event: Event) => {
        const checkerboard = playground.querySelector('hello-checkerboard2');
        const value = (event.target as HTMLInputElement).value;
        checkerboard.setAttribute(attr, value);
    };

    // At last we insert the web component into the playground element.
    const defaultSize = '4';
    const defaultDarkColor = '#441a03';
    const defaultLightColor = '#b5915f';
    render(html`
    <hello-checkerboard2 size=${defaultSize} dark=${defaultDarkColor} light=${defaultLightColor}></hello-checkerboard2>
    <div class="form">
        <label>
            Dark Color
            <input type="color" value=${defaultDarkColor} @change=${updateAttribute('dark')}>
        </label>
        <label>
            Light Color
            <input type="color" value=${defaultLightColor} @change=${updateAttribute('light')}>
        </label>
        <label>
            Size
            <input type="range" value=${defaultSize} min="2" max="16" @change=${updateAttribute('size')}>
        </label>
    </div>`, playground);

}