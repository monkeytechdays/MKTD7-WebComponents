Purpose: Discover main live-cycle hooks

Steps
---

In a Web Component, use the callback when the component is connected, and disconnected.

Note: this is a bad practice to set the content into the constructor, a common usage is to create a render function, and call this function into the connected callback.

1. add the `connectedCallback` method that call the `render` method, and that log the `connected` message through the `console`.
2. add the `disconnectedCallback` method that log the `disconnected` message through the `console`.

Helps
---

Use the callback define below :

* `connectedCallback`: Invoked each time the custom element is appended into a document-connected element. This will happen each time the node is moved, and may happen before the element's contents have been fully parsed.
* `disconnectedCallback`: Invoked each time the custom element is disconnected from the document's DOM.

Note: the `button` create an remove the web component, all the code is in the default function.
You can inspect the content of the HTML with browser tooling.

Extras
---

We going to see an important callback concerning attribute in another exercise.

There is also the `adoptedCallback` hook, invoked each time one of the custom element's attributes is added, removed, or changed.
