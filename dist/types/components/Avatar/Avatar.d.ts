import { FC, ReactNode } from "react";
export declare type Size = "xs" | "sm" | "md" | "lg" | "xl";
export declare type AvatarBaseProps = {
    size?: Size;
    className?: string;
};
export declare type AvatarProps = {
    children: ReactNode;
    bgColor?: string;
    src?: never;
    alt?: never;
} | {
    src: string;
    alt?: string;
    children?: never;
    bgColor?: never;
};
declare const Avatar: FC<AvatarBaseProps & AvatarProps>;
export default Avatar;
