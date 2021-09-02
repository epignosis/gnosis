import ThemeProvider from "../src/components/ThemeProvider/ThemeProvider";
import defaultTheme from "../src/theme/default/defaultTheme";

/* Parameters */
const customViewports = {
  xs: {
    name: "iPhone 5/SE (xs)",
    styles: {
      width: "320px",
      height: "568px",
    },
  },
  sm: {
    name: "Kindle Fire HD (sm)",
    styles: {
      width: "600px",
      height: "963px",
    },
  },
  md: {
    name: "iPad (md)",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  lg: {
    name: "iPad Pro (lg)",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },
  xl: {
    name: "Laptop with MDPI screen (xl)",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
  xxl: {
    name: "Desktop screen (xxl)",
    styles: {
      width: "1905px",
      height: "945px",
    },
  },
};

export const parameters = {
  viewport: {
    viewports: customViewports,
  },
  viewMode: "docs",
};

const themeDecorator = (Story, { globals }) => (
  <ThemeProvider theme={defaultTheme}>
    <Story />
  </ThemeProvider>
);

export const decorators = [themeDecorator];
