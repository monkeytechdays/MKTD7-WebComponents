Purpose: Observe attributes

Steps
---

Now we create a similar checkerboard, but we need to react to attribute changes like the size or the colors.

1. At connection, display the content with the `update` method.
2. Register `size`, `dark`, and `light` attribute to observed.
3. Complete the `attributeChangedCallback` method to update internal state and update the content.


Helps
---

```typescript
class HelloWorld extends HTMLElement {

    private who = 'World';

    static get observedAttributes() {return ['who']; }

    constructor() {
        super();
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        switch(name) {
            case 'who':
                this.who = newValue;
                this.render();
                break;
            default:
                console.warn('Unhandled attribute:', name);
        }
    }

    render() {
        this.innerHTML = `<div>Hello ${this.who}!</div>`;
    }
}
```

Links
---

[See `attributeChangedCallback` part at the end](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks)

Extras
---

At this point, we can already create full-featured components, but we have a big issue: How to style the component without touching the rest of the document ?
(To be continue)