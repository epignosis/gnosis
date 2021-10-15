import { SerializedStyles, Theme } from "@emotion/react";
import { LoaderSize } from "./Loader";
export declare const container: ({ loader }: Theme, { fullScreen, size }: {
    fullScreen: boolean;
    size: LoaderSize;
}) => SerializedStyles;
