# Custom Elements - lifecycle Hooks

## Goals:

- Learn about Native's [lifecycles](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks) hooks
- Learn about all the Stencil's [lifecycles](https://stenciljs.com/docs/component-lifecycle) hooks
- Learn about [@State decorator](https://stenciljs.com/docs/decorators#state)

## Commands

* Server : `npm run start-02`
* Tests : `npm test -- -t 02`

## Files to modify

1. components/stencil-hello/stencil-hello.tsx

## Description

1. Start a counter with the lifecycle equivalent to `connectedCallback` (in native specs) hook using @state.
1. At the beginning the DOM should be `<div>0</div>` but after 10 seconds the DOM should be `<div>10</div>`.
1. Clean the counter reference in the lifecycle equivalent to `disconnectedCallback` (in native specs) hook

## Next

[Custom Elements - Props](../03/README.md)