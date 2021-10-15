import { SerializedStyles, Theme } from "@emotion/react";
import { InputSize } from "../Input/Input";
export declare const container: (inline: boolean) => SerializedStyles;
export declare const radioButtonContainer: ({ typeScaleSizes, formElements: { checkbox } }: Theme, { size, inline }: {
    size: InputSize;
    inline: boolean;
}) => SerializedStyles;
