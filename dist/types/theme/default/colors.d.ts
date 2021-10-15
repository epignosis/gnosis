export declare const THEME_COLOURS: {
    blue: string;
    turquoise: string;
    orange: string;
    red: string;
    green: string;
    gray: string;
    black: string;
    white: string;
};
export declare type ThemeColors = {
    base: string;
    lighter: string;
    lightest: string;
    light: string;
    dark: string;
    darker: string;
    darkest: string;
};
export declare const palletGenerator: (base: string) => ThemeColors;
export declare const colors: {
    blue: ThemeColors;
    turquoise: ThemeColors;
    orange: ThemeColors;
    red: ThemeColors;
    green: ThemeColors;
    gray: ThemeColors;
    black: string;
    white: string;
};
export declare const hexToRGBA: (hex: string, alpha: number) => string;
