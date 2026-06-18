# Gnosis Design Tokens

Shared design tokens from the Gnosis design system, aligned with Figma. These tokens are **framework-agnostic** and can be used in any project — React, Vue, Svelte, Angular, or vanilla JS/CSS.

## Installation

```bash
npm install @epignosis_llc/gnosis
```

> **Note:** If your project does not use React, you can safely ignore the `react` and `react-dom` peer dependency warnings. The tokens entry point has zero React dependencies.

## Usage

### JavaScript / TypeScript

Import tokens directly as JS objects. Works with any bundler (Vite, Webpack, Rollup, esbuild, etc.).

```js
import {
  colors,
  colorBase,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  mediaQueries,
  zIndex,
  transitions,
} from "@epignosis_llc/gnosis/tokens";
```

CommonJS is also supported:

```js
const { colors, spacing } = require("@epignosis_llc/gnosis/tokens");
```

TypeScript types are included automatically.

### CSS Custom Properties

Import the CSS file to get all tokens as CSS variables on `:root`.

```js
// In your app entry point
import "@epignosis_llc/gnosis/tokens.css";
```

Or in CSS/SCSS:

```css
@import "@epignosis_llc/gnosis/tokens.css";
```

Then use the variables anywhere in your stylesheets:

```css
.my-button {
  background-color: var(--color-primary-base);
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-xs) var(--spacing-md);
  font-family: var(--font-family-body);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  transition: background-color var(--transition-fast);
}
```

## Available Tokens

### Colors

Base colors and full palettes with 7 shades each (lightest, lighter, light, base, dark, darker, darkest).

| Token | CSS Variable | Value |
| --- | --- | --- |
| `colorBase.primary` | `--color-base-primary` | `#0046AB` |
| `colorBase.secondary` | `--color-base-secondary` | `#9EA5A9` |
| `colorBase.green` | `--color-base-green` | `#1B7855` |
| `colorBase.orange` | `--color-base-orange` | `#FF9C28` |
| `colorBase.red` | `--color-base-red` | `#D12525` |
| `colorBase.black` | `--color-base-black` | `#000000` |
| `colorBase.white` | `--color-base-white` | `#FFFFFF` |

Each palette color (primary, secondary, green, orange, red) has shades accessible as:

```js
colors.primary.lightest; // #247DFF
colors.primary.base;     // #0046AB
colors.primary.darkest;  // #001C44
```

```css
var(--color-primary-lightest)  /* #247DFF */
var(--color-primary-base)      /* #0046AB */
var(--color-primary-darkest)   /* #001C44 */
```

### Typography

| Token | CSS Variable | Value |
| --- | --- | --- |
| `typography.fontFamily.body` | `--font-family-body` | `"Mulish", Arial, sans-serif` |
| `typography.fontSize.xxs` | `--font-size-xxs` | `0.5rem` (8px) |
| `typography.fontSize.xs` | `--font-size-xs` | `0.75rem` (12px) |
| `typography.fontSize.sm` | `--font-size-sm` | `0.875rem` (14px) |
| `typography.fontSize.md` | `--font-size-md` | `1rem` (16px) |
| `typography.fontSize.lg` | `--font-size-lg` | `1.125rem` (18px) |
| `typography.fontSize.xl` | `--font-size-xl` | `1.375rem` (22px) |
| `typography.fontSize["2xl"]` | `--font-size-2xl` | `1.75rem` (28px) |
| `typography.fontSize["3xl"]` | `--font-size-3xl` | `2.125rem` (34px) |
| `typography.fontWeight.regular` | `--font-weight-regular` | `400` |
| `typography.fontWeight.semibold` | `--font-weight-semibold` | `600` |
| `typography.fontWeight.bold` | `--font-weight-bold` | `700` |
| `typography.fontWeight.extrabold` | `--font-weight-extrabold` | `800` |
| `typography.lineHeight.base` | `--line-height-base` | `1.5715` |

### Spacing

| Token | CSS Variable | Value |
| --- | --- | --- |
| `spacing.none` | `--spacing-none` | `0` |
| `spacing.xxs` | `--spacing-xxs` | `0.25rem` (4px) |
| `spacing.xs` | `--spacing-xs` | `0.5rem` (8px) |
| `spacing.sm` | `--spacing-sm` | `0.75rem` (12px) |
| `spacing.md` | `--spacing-md` | `1rem` (16px) |
| `spacing.lg` | `--spacing-lg` | `1.5rem` (24px) |
| `spacing.xl` | `--spacing-xl` | `2rem` (32px) |

### Border Radius

| Token | CSS Variable | Value |
| --- | --- | --- |
| `borderRadius.none` | `--border-radius-none` | `0` |
| `borderRadius.sm` | `--border-radius-sm` | `5px` |
| `borderRadius.xl` | `--border-radius-xl` | `30px` |
| `borderRadius.full` | `--border-radius-full` | `50%` |

### Shadows

| Token | CSS Variable | Value |
| --- | --- | --- |
| `shadows.sm` | `--shadow-sm` | `0 3px 6px #C1C5C8` |
| `shadows.checkbox` | `--shadow-checkbox` | `0px 0px 0px 9px rgba(36, 125, 255, 0.25)` |

### Breakpoints

| Token | CSS Variable | Value |
| --- | --- | --- |
| `breakpoints.xs` | `--breakpoint-xs` | `320px` |
| `breakpoints.sm` | `--breakpoint-sm` | `576px` |
| `breakpoints.md` | `--breakpoint-md` | `768px` |
| `breakpoints.lg` | `--breakpoint-lg` | `992px` |
| `breakpoints.xl` | `--breakpoint-xl` | `1200px` |
| `breakpoints.xxl` | `--breakpoint-xxl` | `1600px` |
| `breakpoints["3xl"]` | `--breakpoint-3xl` | `1920px` |

### Z-Index

| Token | CSS Variable | Value |
| --- | --- | --- |
| `zIndex.base` | `--z-index-base` | `0` |
| `zIndex.raised` | `--z-index-raised` | `1` |
| `zIndex.overlay` | `--z-index-overlay` | `2` |
| `zIndex.drawer` | `--z-index-drawer` | `3` |
| `zIndex.dropdown` | `--z-index-dropdown` | `100` |
| `zIndex.sidebar` | `--z-index-sidebar` | `1001` |
| `zIndex.modal` | `--z-index-modal` | `1001` |

### Transitions

| Token | CSS Variable | Value |
| --- | --- | --- |
| `transitions.fast` | `--transition-fast` | `0.2s` |
| `transitions.base` | `--transition-base` | `0.3s` |
| `transitions.easeIn` | `--transition-ease-in` | `0.2s ease-in` |
| `transitions.easeInOut` | `--transition-ease-in-out` | `0.3s ease-in-out` |
| `transitions.easeOut` | `--transition-ease-out` | `0.2s ease` |

## Framework Examples

### Vue.js

```vue
<script setup>
import { colors, spacing } from "@epignosis_llc/gnosis/tokens";
</script>

<template>
  <button :style="{ backgroundColor: colors.primary.base, padding: spacing.md }">
    Click me
  </button>
</template>
```

Or with CSS variables:

```vue
<style>
@import "@epignosis_llc/gnosis/tokens.css";

.btn {
  background-color: var(--color-primary-base);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--border-radius-sm);
  color: var(--color-white);
}
</style>
```

### Svelte

```svelte
<script>
  import { colors } from "@epignosis_llc/gnosis/tokens";
  import "@epignosis_llc/gnosis/tokens.css";
</script>

<button style="background-color: {colors.primary.base}">Click me</button>

<style>
  button {
    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: var(--border-radius-sm);
  }
</style>
```

### Angular

```typescript
// styles.css (global)
@import "@epignosis_llc/gnosis/tokens.css";
```

```typescript
// component.ts
import { colors, spacing } from "@epignosis_llc/gnosis/tokens";

@Component({
  template: `<button class="btn">Click me</button>`,
  styles: [`
    .btn {
      background-color: var(--color-primary-base);
      padding: var(--spacing-xs) var(--spacing-md);
      border-radius: var(--border-radius-sm);
    }
  `],
})
export class MyComponent {}
```

### Vanilla HTML/CSS

```html
<link rel="stylesheet" href="node_modules/@epignosis_llc/gnosis/dist/tokens/tokens.css" />

<style>
  body {
    font-family: var(--font-family-body);
    font-size: var(--font-size-md);
    line-height: var(--line-height-base);
  }
</style>
```
