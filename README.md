# Gnosis

> [Epignosis](https://www.epignosishq.com/) official react design system.

An internal, opinionated UI library. Primary focus is to provide a consisted and unified UI, UX and accessibility across our products.

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

You can either use gnosis theme default theme (colors, fonts, etc.) or customize it to fit your project needs. This section describes the various options you can use to modify it.

## 🌍 Globals

You can add global styles by providing serialized styles like the example below:

```js
const globalStyles = {
  "html, body": {
    background: "red",
  },
  h1: {
    fontSize: "5rem",
    textAlign: "center",
  },
  "#my-id": {
    color: "green",
  },
  ".my-css-class": {
    color: "blue",
  },
};

<ThemeProvider globalStyles={globalStyles}></ThemeProvider>;
```

## 🛠 Theme config

You can also apply your own brand and colors simply by providing a new color theme. Just locate the component's theme configuration you need to change - the example below is for changing the success button colors - and create an object with your new values. The new theme configuration will be merged with the default theme, and the final merged theme will apply all the new values to the success button (or any other component). The default theme's configuration files are located in `./src/theme/default/config/` directory - for example the Button component's default theme is the `./src/theme/default/config/button.ts`. Have a look at the default theme's configuration and create / configure your new custom theme.

```js
const myCustomTheme = {
  button: {
    success: {
      default: {
        background: "pink",
        borderColor: "red",
        color: "white",
      },
      hover: {
        background: "red",
        borderColor: "pink",
        color: "white",
      },
      active: {
        background: "red",
        borderColor: "pink",
        color: "white",
      },
    },
  },
};

<ThemeProvider theme={myCustomTheme}></ThemeProvider>;
```

## Upcoming components

- [ ] MultiSelect
