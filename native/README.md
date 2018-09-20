MKTD7 - WebComponent - Native
===

Requirement
---

* [Git](https://git-scm.com/)
* [NodeJS](https://nodejs.org/en/) 8+
* A good web IDE: [VSCode](https://code.visualstudio.com/), [Atom](https://atom.io/), [WebStorm](https://www.jetbrains.com/webstorm/), [emacs](https://www.gnu.org/software/emacs/), [vim](https://www.vim.org/), ...
* a modern browser..

Your Job
---

Run `npm start`, and open you browser at <http://localhost:8080> ...

Then follow instructions, edit the `src/exos/exo-XXX/exo.ts` file to complete test.

* [Oldies...](src/exos/exo-0/README.md)
* [Hello World](src/exos/exo-0/README.md)
* [Life cycle Hooks](src/exos/exo-0/README.md)
* [Attributes](src/exos/exo-0/README.md)
* [Observe attributes](src/exos/exo-0/README.md)
* [Events](src/exos/exo-0/README.md)
* [Shadow DOM](src/exos/exo-0/README.md)
* [HTML Template](src/exos/exo-0/README.md)

Known Issues
---

* You might have a `Cannot read property 'nextSibling' of null`, probably related to[Uncaught (in promise) TypeError: Cannot read property 'nextSibling' of null #293
](https://github.com/Polymer/lit-html/issues/293). You just need to refresh your browser to remove this issue.

* The exo-6 does not work if you use the ShadowDOM polyfill.
