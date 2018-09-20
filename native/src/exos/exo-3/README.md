Purpose: Play with attribute

TODO
---

Retrieve an attribute value.

Step
---

1. in the size getter, get the `size` attribute and convert it to a number

Also take a look at another way to create the content.
We use here the [`lit-html`](https://polymer.github.io/lit-html/) library that is a `innerHTML` on steroid.

Important, take the require time to understand the whole component.

Helps
---

These three instructions below show few way to convert a javascript `string` to an integer `number`:

```javascript
parseInt('42', 10) // 42 : number

+'42' // 42 : number

'42'|0 // 42 : number
```

Links
---

[Element.getAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)

[JS Getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)

Extras
---

Try `$('hello-checkerboard').setAttribute('size', 10);` into the browser console.
There is an issue in this exercise: when the attribute `size` change the custom element is not notified. See next exercise...

You may have notice that there is no pre-defined technic to set the content of custom elements. So you can use any templating lib you want for this purpose.
We see later another templating solution, but in fact [`lit-html`](https://polymer.github.io/lit-html/) is a young be a very good solution.
