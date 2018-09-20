Purpose: Create your first web component.

Steps
---

Create a custom elements that display the essential 'Hello World !' message.

Then add this element into the `.playground` HTML element.

1. create a class `HelloWorld` that extends `HTMLElement`.
2. set the content to be a `DIV` with the `Hello World!` message.
3. register the custom element.

Helps
---

* you can use the DOM api to append a div child, but it's easier to set the `innerHTML`, later will see other alternatives.

To define a new custom element, you have two steps.
First extend the `HTMLElement`:

```js
class MyFirstWebComponent extends HTMLElement {
    constructor() {
        // Don't forget to call `super()` into the `constructor` of a custom elements.
        super();

        // you can use the DOM api to append a div child,
        // but it's easier to set the innerHTML,
        // later will see other alternatives
        this.innerHTML = `<div>Plop !</div>`;
    }
}
```

Then register the custom element into the browser `CustomElementRegistry`:

```js
customElements.define('my-first-wc', MyFirstWebComponent);
```

Now you can use the new custom element into an HTML page:

```html
<html>
    <head><!-- ... --></head>
    <body>
        <!-- ... -->
        <my-first-wc></my-first-wc>
        <!-- ... -->
    </body>
</html>
```

Links
---

* [CustomElementRegistry.define()](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define)

Extras
---

- You can extends existing HTML elements like `HTMLButtonElement` if you want, but it should precised when calling the `define` function.

- You also can use the `is` attribute if you need to keep the basic element tag, see [this example](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/is).

- For a complete description of custom element, see [Using custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).