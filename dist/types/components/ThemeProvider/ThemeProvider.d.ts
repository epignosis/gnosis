import { FC, ReactNode } from "react";
import { Theme, SerializedStyles } from "@emotion/react";
import { TypeScaleConfig } from "@theme/utils/typography";
import "modern-normalize/modern-normalize.css";
declare type ThemeProviderProps = {
    typeScaleConfig?: TypeScaleConfig;
    theme?: Theme;
    globalStyles?: SerializedStyles;
    children: ReactNode;
};
declare const ThemeProvider: FC<ThemeProviderProps>;
export default ThemeProvider;
