import { html, render } from 'lit-html';

interface Cell {
    i: number;
    j: number;
    dark: boolean;
}

class Checkerboard extends HTMLElement {

    get size(): number {
        // TODO Step 1
        return 1;
    }

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
        render(this.template(), this);
    }

    private template() {
        const gridTemplate = `repeat(${this.size}, 1fr)`;
        const gridStyle = `grid-template: ${gridTemplate} / ${gridTemplate};`;
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
    customElements.define('hello-checkerboard', Checkerboard);

    // At last we insert the web component into the playground element.
    const playground = document.querySelector('.playground');
    playground.innerHTML = '<hello-checkerboard size="8"></hello-checkerboard>';
}