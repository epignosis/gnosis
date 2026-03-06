import React from "react";
import { useTheme } from "@emotion/react";
import ThemeProvider from "./ThemeProvider";
import { render, screen } from "@test-utils/render";
import defaultTheme from "@theme/default/defaultTheme";
import { DEFAULT_TYPESCALE_CONFIG, generateTypeScaleSizes } from "@theme/utils/typography";

type Theme = typeof defaultTheme;

/**
 * Renders a single theme value as text, selected via a typed callback.
 * Covers the acceptance criterion: "child components can access the merged theme via useTheme".
 */

const ThemeValue = ({ select }: { select: (theme: Theme) => unknown }) => {
  const theme = useTheme() as Theme;

  return <span data-testid="value">{String(select(theme))}</span>;
};

describe("<ThemeProvider />", () => {
  it("merges a custom theme prop over the default theme values", () => {
    const { container } = render(
      <ThemeProvider theme={{ body: { background: "red" } }}>
        <ThemeValue select={(t) => t.body.background} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  const getValue = (testId: string) => screen.getByTestId(testId).textContent;

  it("generates and applies typeScaleSizes from the default typeScaleConfig", () => {
    const { md } = generateTypeScaleSizes(DEFAULT_TYPESCALE_CONFIG);

    render(
      <ThemeProvider>
        <ThemeValue select={(t) => t.typeScaleSizes.md} />
      </ThemeProvider>,
    );

    expect(getValue("value")).toBe(String(md));
  });

  it("generates and applies typeScaleSizes from a custom typeScaleConfig", () => {
    const typeScaleConfig = { baseFontSize: 1.25, sizeRatio: 1.2 };
    const { md } = generateTypeScaleSizes({ ...DEFAULT_TYPESCALE_CONFIG, ...typeScaleConfig });

    render(
      <ThemeProvider typeScaleConfig={typeScaleConfig}>
        <ThemeValue select={(t) => t.typeScaleSizes.md} />
      </ThemeProvider>,
    );

    expect(getValue("value")).toBe(String(md));
  });

  // Negative test
  it("does not throw when rendered with an empty theme object", () => {
    expect(() =>
      render(
        <ThemeProvider theme={{}}>
          <p>safe</p>
        </ThemeProvider>,
      ),
    ).not.toThrow();
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
