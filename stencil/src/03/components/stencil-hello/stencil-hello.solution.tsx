import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'stencil-hello-solution',
  styleUrl: 'stencil-hello.css',
})
export class StencilHelloSolution {
  @Prop() firstname: string = 'John';
  @Prop() lastname: string = 'Doe';

  render() {
    return (
      <h1>
        Hello {this.firstname} {this.lastname}!
      </h1>
    );
  }
}