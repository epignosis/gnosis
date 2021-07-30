import React, { FC } from "react";
import {
  ThemeProvider as EmotionThemeProvider,
  Global,
  css,
} from "@emotion/react";
import talentLMSplus from "../../theme/talentLMSplus";

type ThemeProviderProps = {
  theme?: any;
  globalStyles?: any;
  children: any;
};

export const defaultGlobalStyles = () => css`
  body,
  html {
    font-size: 16px;
    font-weight: normal;
    background: red;
  }
`;

const ThemeProvider: FC<ThemeProviderProps> = ({
  theme = talentLMSplus,
  globalStyles = defaultGlobalStyles,
  children,
}) => {
  console.log(theme);

  return (
    <EmotionThemeProvider theme={talentLMSplus}>
      <Global styles={globalStyles} />
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
