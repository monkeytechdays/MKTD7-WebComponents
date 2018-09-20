import { Component } from '@stencil/core';

@Component({
  tag: 'stencil-button-shadow',
  styles: `
    button {
      position: relative;
      background: #000;
      border: 0;
      padding: 14px 42px;
      border-radius: 3px;
      cursor: pointer;
      overflow: hidden;
      outline: none;
      font-weight: 400;
      font-size: 12px;
      color: #fff;
      letter-spacing: 0.2em;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      transition: all 0.2s ease;
    }
  `,
})
export class StencilButtonShadow {
  render() {
    return (
      <button>Shadow Dom enabled</button>
    );
  }
}