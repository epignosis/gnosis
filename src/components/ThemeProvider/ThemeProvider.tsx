import React, { FC, ReactNode } from "react";
import {
  ThemeProvider as EmotionThemeProvider,
  Global,
  Theme,
  SerializedStyles,
} from "@emotion/react";
import merge from "deepmerge";
import defaultTheme from "@theme/default/defaultTheme";
import defaultGlobals from "@theme/utils/global";
import {
  DEFAULT_TYPESCALE_CONFIG,
  generateTypeScaleSizes,
  TypeScaleConfig,
} from "@theme/utils/typography";
// import "modern-normalize/modern-normalize.css";

type ThemeProviderProps = {
  typeScaleConfig?: TypeScaleConfig;
  theme?: Theme;
  globalStyles?: SerializedStyles;
  children: ReactNode;
};

const ThemeProvider: FC<ThemeProviderProps> = ({
  typeScaleConfig = {},
  theme = {},
  globalStyles = {},
  children,
}) => {
  const mergedTypeScaleConfig: TypeScaleConfig = merge(DEFAULT_TYPESCALE_CONFIG, typeScaleConfig);
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
      {globalStyles && <Global styles={globalStyles} />}
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
