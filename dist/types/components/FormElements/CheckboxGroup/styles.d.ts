import { SerializedStyles, Theme } from "@emotion/react";
import { CheckboxSize } from "./Checkbox";
export declare const checkboxGroupContainer: (inline: boolean) => SerializedStyles;
export declare const checkboxContainer: ({ typeScaleSizes, formElements }: Theme, { size, inline }: {
    size: CheckboxSize;
    inline: boolean;
}) => SerializedStyles;
