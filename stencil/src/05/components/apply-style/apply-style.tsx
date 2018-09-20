import { Component, Element, State } from '@stencil/core';

@Component({
    tag: 'apply-style',
    styles: `
        apply-style {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        textarea{
            display: block;
        }
    `,
})
export class ApplyStyle {
    @Element() el: Element;
    @State() style: string = `button {
    color: red;
    padding: 14px 42px;
    border-radius: 10px;
}
    `;

    applyStyle = () => this.style = this.el.querySelector('textarea').value;

    render() {
        return (
            <div>
                <textarea value={this.style} rows={5} cols={50} onChange={this.applyStyle}></textarea>
                <style>
                    {this.style}
                </style>
                <slot />
            </div>
        );
    }
}