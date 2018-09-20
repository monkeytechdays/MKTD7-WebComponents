Purpose: check the configuration.

Does my broswer support Web Components ?
---

* [Custom Elements v1](https://caniuse.com/#feat=custom-elementsv1)
* [Shadow DOM v1](https://caniuse.com/#feat=shadowdomv1)
* [HTML templates](https://caniuse.com/#feat=template)

* [Web Components polyfills](https://github.com/WebComponents/webcomponentsjs)

On Firefox, you can use the polyfill or enable flags <about:config> and filter `dom.webcomponents.*` to enable custom elements and shadow DOM.

In the Firefox 63 the full support of custom elements and shadow DOM does not require to turn on the flag, It's coming [very soon](https://wiki.mozilla.org/Release_Management/Calendar).

Steps
---

Use the (awful) DOM api to create an HTML element, with some dynamic content.
Add this element into the `.playground` HTML element.

You need to edit the `src/exos/exo-0.ts` file, if the tests passed, then click on `Next` button.

Note: tests are located into the `src/exos/exo-0.spec.ts` file, it might help you to read tests.

1. use the DOM api to create an HTML `DIV`,
2. use the `innerHTML` to add the text `Hello XXX!` into the `DIV`,
3. add the `DIV` into the first element with CSS class `playground`.

This is an appetizer, you just need to uncomment the code to pass the test.

Helps
---

```js
// Create a link
const linkElt = document.createElement('a');
linkElt.setAttribute('href', '#cheater');

// Set content
const bait = 'see solution';
linkElt.innerHTML = `Click me to ${bait} !`;

// Add the link to first element match the `.playground` CSS selector
const maybeNav = document.querySelector('.playground');
maybeNav.appendChild(linkElt);
```

Links
---

* [Document.createElement](https://developer.mozilla.org/fr/docs/Web/API/Document/createElement)

* [Document.appendChild](https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild)
