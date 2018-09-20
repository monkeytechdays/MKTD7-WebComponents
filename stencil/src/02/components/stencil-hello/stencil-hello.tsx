import { Component, State } from '@stencil/core';

@Component({
  tag: 'stencil-hello',
  styleUrl: 'stencil-hello.css',
})
export class StencilHello {
  timer: number; // Timer reference to clear on componentDidUnload

  @State() time: number;

  render() {
    return (
      <div>
        {this.time}
      </div>
    );
  }
}