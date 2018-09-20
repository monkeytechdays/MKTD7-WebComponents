# Custom Elements - Hello World

## Goals:

- Learn about [@Component](https://stenciljs.com/docs/my-first-component) decorator
- Use [JSX](https://stenciljs.com/docs/templating-jsx)

## Commands

* Server : `npm run start-01`
* Tests : `npm test -- -t 01`

## Files to modify

1. components/stencil-hello/stencil-hello.tsx

## Description

Write the following code using StencilJS:

```
class MyComponent extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = "<div>Hello World</div>";
    }
}
```

## Next

[Custom Elements - lifecycle Hooks & State](../02/README.md)