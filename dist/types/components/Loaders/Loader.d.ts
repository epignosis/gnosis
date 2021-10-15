import { FC } from "react";
export declare type LoaderSize = "md" | "lg";
export declare type LoaderProps = {
    fullScreen?: boolean;
    size?: "md" | "lg";
};
declare const Loader: FC<LoaderProps>;
export default Loader;
