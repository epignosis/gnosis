import { Theme, SerializedStyles } from "@emotion/react";
import { Size } from "./ProgressBar";
export declare const container: ({ progressBar }: Theme, { percent, size, rounded }: {
    percent: number;
    size: Size;
    rounded: boolean;
}) => SerializedStyles;
