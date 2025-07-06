# PostCSS Focus Visible Within

Adds the missing focus pseudoselector - `:focus-visible-within`.

```css
:focus-visible-within {
  background: tomato;
}

/* becomes */

:has(:focus-visible) {
  background: tomato;
}
```

## Usage

Add PostCSS Focus Visible Within to your project

```bash
npm install --save-dev postcss postcss-focus-visible-within
```

Use it as a PostCSS plugin

```js
// postcss.config.js

import focusVisibleWithin from 'postcss-focus-visible-within';

export default {
  plugins: [focusVisibleWithin],
};
```

## Alternatives

You might prefer to use a custom snippet. Here's an example for VSCode/VSCode based editors. Add it to `.vscode/css.code-snippets` in your project, or if you'd like to use it globally, add it to `~/Library/Application Support/Code/User/snippets/css.json`.

```jsonc
{
  ":focus-visible-within": {
    "prefix": ":focus-visible-within",
    "body": ":has(:focus-visible)",
  },
}
```
