# Gnosis

> [Epignosis](https://www.epignosishq.com/) official react design system.

An internal UI library that is opinionated. Primary focus is to provide a consisted and unified UI, UX and accessibility across our products.

## 📦 Installation

```text
$ npm i @epignosis_llc/gnosis
```

```text
$ yarn add @epignosis_llc/gnosis
```

Please note that react >= 16.0.0 and react-dom >= 16.0.0 are peer dependencies. Also that emotion 11 is being used and that will not work in older emotion projects.

## 🔨 Usage

Start by wrapping your App with `ThemeProvider` component (see example below). All the other components MUST be into the ThemeProvider in order to get the appropriate theme context.

```jsx
import { ThemeProvider, Button } from "@epignosis_llc/gnosis";

function App() {
  return (
    <ThemeProvider>
      <Button>My Button</Button>
    </ThemeProvider>
  );
}
```

## ✨ Theme

Todo.
