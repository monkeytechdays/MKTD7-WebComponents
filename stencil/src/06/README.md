# Custom Elements - Slots

## Goals:

- Learn about [`<slot>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) tag
- Learn about [named Slots](https://alligator.io/web-components/composing-slots-named-slots/)

## Commands

* Server : `npm run start-06`
* Tests : `npm test -- -t 06`

## Files to modify

1. components/stencil-users/stencil-users.tsx
1. components/stencil-card/stencil-card.tsx

## Description

The goal is to enable named slots in `stencil-card` then use them in `stencil-users`

### Steps stencil-card

1. create three named slots: `title`, `subtitle` and `content` in the right position (see comments in the render method)

### Steps stencil-users

1.  Loop through users and use `stencil-card` named slots to display user's `name`, `location` and `bio` (see comments in the render method)
