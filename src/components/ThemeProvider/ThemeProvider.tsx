import React, { FC } from "react";
import {
  ThemeProvider as EmotionThemeProvider,
  Global,
  css,
} from "@emotion/react";
import merge from "deepmerge";
import { defaultTheme, defaultGlobals } from "../../";
import {
  DEFAULT_TYPESCALE_CONFIG,
  generateTypeScaleSizes,
} from "../../theme/utils/typography";
import "modern-normalize/modern-normalize.css";

type ThemeProviderProps = {
  typeScaleConfig: object;
  theme?: object;
  globalStyles?: any;
  children: any;
};

const ThemeProvider: FC<ThemeProviderProps> = ({
  typeScaleConfig = {},
  theme = {},
  globalStyles = () => css``,
  children,
}) => {
  const mergedTypeScaleConfig = merge(
    typeScaleConfig,
    DEFAULT_TYPESCALE_CONFIG
  );
  const typeScaleSizes = generateTypeScaleSizes(mergedTypeScaleConfig);
  const mergedTheme = merge.all([
    defaultTheme,
    theme,
    { typeScaleSizes },
    {
      body: {
        lineHeight: mergedTypeScaleConfig.lineHeight,
      },
    },
  ]);

  return (
    <EmotionThemeProvider theme={mergedTheme}>
      <Global styles={defaultGlobals} />
      <Global styles={globalStyles} />
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
