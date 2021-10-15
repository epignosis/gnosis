import { Theme, SerializedStyles } from "@emotion/react";
import { AlertType } from "./Alert";
export declare const container: ({ alert }: Theme, { type }: {
    type: AlertType;
}) => SerializedStyles;
