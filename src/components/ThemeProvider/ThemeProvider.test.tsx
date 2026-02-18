import React from "react";
import { useTheme } from "@emotion/react";
import ThemeProvider from "./ThemeProvider";
import { render, screen } from "@test-utils/render";
import defaultTheme from "@theme/default/defaultTheme";
import { DEFAULT_TYPESCALE_CONFIG, generateTypeScaleSizes } from "@theme/utils/typography";

/**
 * Reads a dot-notated path from the Emotion theme and renders it as text.
 * Also implicitly covers: "child components can access the merged theme via useTheme".
 */
const ThemeReader = ({ path }: { path: string }) => {
  const theme = useTheme() as Record<string, unknown>;
  const value = path
    .split(".")
    .reduce<unknown>((obj, key) => (obj as Record<string, unknown>)?.[key], theme);

  return <span data-testid="value">{String(value)}</span>;
};

const themeValue = () => screen.getByTestId("value").textContent;

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
        <ThemeReader path="body.background" />
      </ThemeProvider>,
    );

    expect(themeValue()).toBe("red");
  });

  it("preserves unoverridden default theme values", () => {
    render(
      <ThemeProvider theme={{ body: { background: "red" } }}>
        <ThemeReader path="body.fontFamily" />
      </ThemeProvider>,
    );

    expect(themeValue()).toBe(defaultTheme.body.fontFamily);
  });

  it("applies typeScaleSizes from default config", () => {
    const { md } = generateTypeScaleSizes(DEFAULT_TYPESCALE_CONFIG);

    render(
      <ThemeProvider>
        <ThemeReader path="typeScaleSizes.md" />
      </ThemeProvider>,
    );

    expect(themeValue()).toBe(String(md));
  });

  it("merges custom typeScaleConfig and applies generated sizes", () => {
    const typeScaleConfig = { baseFontSize: 1.25, sizeRatio: 1.2 };
    const { md } = generateTypeScaleSizes({ ...DEFAULT_TYPESCALE_CONFIG, ...typeScaleConfig });

    render(
      <ThemeProvider typeScaleConfig={typeScaleConfig}>
        <ThemeReader path="typeScaleSizes.md" />
      </ThemeProvider>,
    );

    expect(themeValue()).toBe(String(md));
  });

  it("sets body.lineHeight from typeScaleConfig", () => {
    render(
      <ThemeProvider typeScaleConfig={{ lineHeight: 2 }}>
        <ThemeReader path="body.lineHeight" />
      </ThemeProvider>,
    );

    expect(themeValue()).toBe("2");
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
    // Only lineHeight is overridden — other sizes should still resolve from defaults
    const { lg } = generateTypeScaleSizes(DEFAULT_TYPESCALE_CONFIG);

    render(
      <ThemeProvider typeScaleConfig={{ lineHeight: 2 }}>
        <ThemeReader path="typeScaleSizes.lg" />
      </ThemeProvider>,
    );

    expect(themeValue()).toBe(String(lg));
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
