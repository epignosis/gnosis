import { SerializedStyles, Theme } from "@emotion/react";
import { InputSize } from "./Input/Input";
export declare const inputContainerBaseStyles: ({ block, }: {
    block: boolean;
}) => SerializedStyles;
export declare const inputBaseStyles: (formElements: Theme["formElements"], { block, size }: {
    block?: boolean | undefined;
    size?: InputSize | undefined;
}) => SerializedStyles;
