import React, { FC } from "react";
import {
  ThemeProvider as EmotionThemeProvider,
  Global,
  css,
} from "@emotion/react";
import defaultTheme from "../../theme/default/defaultTheme";
import defaultGlobals from "../../theme/global";

type ThemeProviderProps = {
  theme?: any;
  globalStyles?: any;
  children: any;
};

const ThemeProvider: FC<ThemeProviderProps> = ({
  theme = defaultTheme,
  globalStyles = defaultGlobals,
  children,
}) => {
  console.log(theme);

  return (
    <EmotionThemeProvider theme={defaultTheme}>
      <Global styles={globalStyles} />
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
