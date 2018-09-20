Purpose: Play with inner and outer events

TODO
---

We create a countdown component, we need to expose the inner state and when the state change outside the component. We also going to play with component trigger by inner HTML element like button or input.

We use here a common pattern with ES2015 custom setter that trigger content updates and dispatch state changes.

1. update custom setters that should trigger an `update()`
2. in the `template`, bind the input `change` event to an update of the count attribute
3. in the `template`, bind the start button the `start` method
4. in the `start` method, update the state to `run`, and after the timeout to `done`
5. in the `template`, bind the reset button the the `reset` method
6. in the `reset` method update the state to `idle`
7. in the `triggerState` method create an `state CustomEvent`, with the current state as `detail`, then dispatch the event.

Note: the binding of the `state` event when using the custom elements is done into the default function.

Helps
---

With [`lit-html`](https://polymer.github.io/lit-html/) we can set an event listener with:

```javascript
html`<button @click=${(e) => console.log('clicked')}>Click Me</button>`
```

Links
---

[Creating and triggering events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)

[`lit-html` binding Types](https://polymer.github.io/lit-html/guide/writing-templates.html#binding-types)

[`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

Extras
---

This is the last exercise on custom element, you can have a look on this tutorial: [Using custom elements
](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)

Notice the usage of the __getter / setter__ pattern that allowing the call of update when it's needed, and eventually dispatch some custom events.

We have seen few technics to create and updage content, let's have a review :

* DOM API : awful API, but it's easy to keep reference on element in your component, so it's could be optimized to only change the only need part on the content. Run away !
* `innerHTML` : easy, but you need to redraw all content and register listener for each updates. If you have a static content it could be a good solution, but otherwise choose a more suitable solution for dynamic content
* [`lit-html`](https://polymer.github.io/lit-html/) : a good compromise, the libarary is very small, and it's allow to bind event handler. If you like `lit-html`, you should follow the [`lit-element`](https://github.com/Polymer/lit-element) project.
* Every templating solution you want, for example [Stencil](https://stenciljs.com) is using JSX.
