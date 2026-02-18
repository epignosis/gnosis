import React from "react";
import { useTheme } from "@emotion/react";
import ThemeProvider from "./ThemeProvider";
import { render, screen } from "@test-utils/render";
import defaultTheme from "@theme/default/defaultTheme";
import { DEFAULT_TYPESCALE_CONFIG, generateTypeScaleSizes } from "@theme/utils/typography";

type Theme = typeof defaultTheme;

// Each component below reads exactly one theme value and renders it as text.
// This covers the acceptance criterion: "child components can access the merged theme via useTheme".

const BodyBackground = () => {
  const { body } = useTheme() as Theme;

  return <span data-testid="value">{body.background}</span>;
};

const BodyFontFamily = () => {
  const { body } = useTheme() as Theme;

  return <span data-testid="value">{body.fontFamily}</span>;
};

const BodyLineHeight = () => {
  const { body } = useTheme() as Theme;

  return <span data-testid="value">{String(body.lineHeight)}</span>;
};

const TypeScaleMd = () => {
  const { typeScaleSizes } = useTheme() as Theme;

  return <span data-testid="value">{String(typeScaleSizes.md)}</span>;
};

const TypeScaleLg = () => {
  const { typeScaleSizes } = useTheme() as Theme;

  return <span data-testid="value">{String(typeScaleSizes.lg)}</span>;
};

describe("<ThemeProvider />", () => {
  it("renders children", () => {
    render(
      <ThemeProvider>
        <p>hello</p>
      </ThemeProvider>,
    );

    expect(screen.getByText("hello")).toBeInTheDocument();
  });

  it("merges custom theme over defaults", () => {
    render(
      <ThemeProvider theme={{ body: { background: "red" } }}>
        <BodyBackground />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("value").textContent).toBe("red");
  });

  it("preserves unoverridden default theme values", () => {
    render(
      <ThemeProvider theme={{ body: { background: "red" } }}>
        <BodyFontFamily />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("value").textContent).toBe(defaultTheme.body.fontFamily);
  });

  it("applies typeScaleSizes from default config", () => {
    const { md } = generateTypeScaleSizes(DEFAULT_TYPESCALE_CONFIG);

    render(
      <ThemeProvider>
        <TypeScaleMd />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("value").textContent).toBe(String(md));
  });

  it("merges custom typeScaleConfig and applies generated sizes", () => {
    const typeScaleConfig = { baseFontSize: 1.25, sizeRatio: 1.2 };
    const { md } = generateTypeScaleSizes({ ...DEFAULT_TYPESCALE_CONFIG, ...typeScaleConfig });

    render(
      <ThemeProvider typeScaleConfig={typeScaleConfig}>
        <TypeScaleMd />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("value").textContent).toBe(String(md));
  });

  it("sets body.lineHeight from typeScaleConfig", () => {
    render(
      <ThemeProvider typeScaleConfig={{ lineHeight: 2 }}>
        <BodyLineHeight />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("value").textContent).toBe("2");
  });

  // Negative tests
  it("does not crash when given an empty theme object", () => {
    expect(() =>
      render(
        <ThemeProvider theme={{}}>
          <p>safe</p>
        </ThemeProvider>,
      ),
    ).not.toThrow();
  });

  it("does not corrupt unrelated typeScaleSizes when a partial typeScaleConfig is provided", () => {
    const { lg } = generateTypeScaleSizes(DEFAULT_TYPESCALE_CONFIG);

    render(
      <ThemeProvider typeScaleConfig={{ lineHeight: 2 }}>
        <TypeScaleLg />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("value").textContent).toBe(String(lg));
  });

  it("matches snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={{ body: { background: "navy" } }}>
        <p>content</p>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
