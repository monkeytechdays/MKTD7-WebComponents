Purpose: Play with HTML Templates

TODO
---

1. Create a template element with the `sticky-note-template` id, use the `style` and `htmlTemplate` inside the template.
2. In the constructor, load the template into the `stickyNotesTemplate` attribute
3. In the connected callback, clone the template to use it into the `shadowRoot`
4. You can use the `content` slot to display a `Plop !` message.

Helps
---

[Using templates and slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)

[`Node.cloneNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)


[`<template>`: The Content Template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)

[`<slot>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)


[CSS pseudo element `::slotted`](https://developer.mozilla.org/en-US/docs/Web/CSS/::slotted)

Extras
---

We use a webpack loader to retrieve the content of the template and the stylesheet.

```javascript
const style = require('!!raw-loader!./shadow.css');
const htmlTemplate = require('!!raw-loader!./template.html');
```

Note that [`lit-html`](https://polymer.github.io/lit-html/) use HTML template internally.

🎉 Congratulations ! 🎉

You have ended the 'native web component' tutorial.
You can continue with the 'Stencil' tutorial.