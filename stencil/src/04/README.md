# Custom Elements - Events

## Goals:

- Learn about [Events](https://stenciljs.com/docs/events), `EventEmitter` & `Listen`
- Learn how to use loops with JSX

## Commands

* Server : `npm run start-04`
* Tests : `npm test -- -t 04`

## Files to modify

1. components/stencil-todolist/stencil-todolist.tsx
1. components/stencil-todoitem/stencil-todoitem.tsx

## Description

The goal is to build a todo list with two components: `stencil-todolist` and `stencil-todoitem`

1. Open `stencil-todolist`
1. In the render method, loop through this.list and return stencil-todoitem component with `uid`, `text` and `completed` props

At this point if you run `npm run start-04` you should see the following:

```
<stencil-todolist>
    <stencil-todoitem id="1" text="Learn about Web Components" completed></stencil-todoitem>
    <stencil-todoitem id="2" text="Learn about Stencil"></stencil-todoitem>
    <stencil-todoitem id="2" text="Learn about Stencil"></stencil-todoitem>
</stencil-todolist>
```

Your mission is to toggle the `completed` state of any item on the screen by clicking the "Toggle" buttons.

### Tasks stencil-todolist

1. Use `@Listen('todoCompleted')` to receive the `todoCompleted` events from `stencil-todoitem`
1. Update `this.list` with the new `completed` flag state. (do not mutate this.list)

### Tasks stencil-todoitem

1. Use `@Event() todoCompleted` of type `EventEmitter` in `stencil-todoitem`
1. Implement `handleOnComplete` method to emit `todoCompleted` event with `this.uid` as argument
1. Add an `onClick` event on the button and call `this.handleOnComplete`
1. Find a way to set the class 'completed' when this.completed === true

## Next

[Shadow DOM](../05/README.md)
