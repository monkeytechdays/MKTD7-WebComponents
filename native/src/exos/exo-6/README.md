Purpose: Understand the Shadow DOM concept

TODO
---

We need more encapsulation to avoid that any funny developer change you component layout or style with some CSS classes.
Another issue is if you planned to retrieve the inner DOM of your component to use it (think about a tab system as example) your are screw.

Shadow DOM is the answer to this encapsulation issue.

1. in the constructor, set a shadow root by calling `attachShadow` with the `{ mode: 'open' }` parameter.
2. in the `update` method use the `shadowRoot` as host of the template.
3. in the `template` method, add an encapsulated `style` for the web component (see below)

```css
.card {
	color: #333;
	padding: 4px;
	border-radius: .25em;
	border: thin solid rgba(0, 0, 0, .12);
}

.card.depth-1 {
	box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 
				0 1px 2px rgba(0, 0, 0, .24);
}

.card.depth-2 {
	box-shadow: 0 3px 6px rgba(0,0,0,.16), 
				0 3px 6px rgba(0,0,0,.23);
}

.card.depth-3 {
	box-shadow: 0 10px 20px rgba(0,0,0,.19), 
				0 6px 6px rgba(0,0,0,.23);
}

.card.depth-4 {
	box-shadow: 0 14px 28px rgba(0,0,0,.25), 
				0 10px 10px rgba(0,0,0,.22);
}

.card.depth-5 {
	box-shadow: 0 19px 38px rgba(0,0,0,.30),
				0 15px 12px rgba(0,0,0,.22);
}
```

Use the browser inspector to view the DOM tree with a Shadow DOM.

NOTE: scoped style does not work with the polyfill, so the `should have custom style` test will fail if your browser does not support ShadowDOM. You can try to pass the test by editing the `style.css` file or skip it to move to the next exercise.

Helps
---

[Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

[`attachShadow`](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow)


Extras
---

The `open` mode allow JavaScript to access the `shadowRoot`. The `closed` value is not very useful because it's easy to hijack. More information into this [blog post](https://blog.revillweb.com/open-vs-closed-shadow-dom-9f3d7427d1af).

If you want to allow custom style from external, you can expose some attributes or use [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables).

Scoped style is hard to polyfill, there are some issues and require extra code, more information: [ShadyCSS](https://github.com/webcomponents/shadycss).

[`:host` CSS pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:host) allow to style the `shadowRoot` element. If you want to learn more about CSS encapsulation, take a look at the draft specification: [CSS Scoping Module Level 1](https://drafts.csswg.org/css-scoping/).

There is another issue in this code, according to the specification, the inner DOM may not be available (fully parsed) into the `connectedCallback` callback.