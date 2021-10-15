export declare type TypeScaleSizes = {
    "2xs": number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    "2xl": number;
    "3xl": number;
    "4xl": number;
};
export declare type TypographyLevels = keyof TypeScaleSizes;
export declare type TypeScaleConfig = {
    baseFontSize: number;
    lineHeight: number;
    sizeRatio: number;
    levels: {
        base: string;
        up: TypographyLevels[];
        down: TypographyLevels[];
    };
};
export declare const DEFAULT_TYPESCALE_CONFIG: Readonly<TypeScaleConfig>;
export declare const generateTypeScaleSizes: (typography: TypeScaleConfig) => Readonly<TypeScaleSizes>;
