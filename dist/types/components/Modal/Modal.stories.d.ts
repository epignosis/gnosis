import React from "react";
import { Story } from "@storybook/react";
import { ReactModalProps } from "./Modal";
declare const _default: {
    component: React.FC<ReactModalProps> & {
        Header: React.FC<Omit<import("./Modal").HeaderProps, "onClose">>;
        Body: React.FC<{
            style?: React.CSSProperties | undefined;
        }>;
        Footer: React.FC<{
            style?: React.CSSProperties | undefined;
        }>;
    };
    title: string;
    parameters: {
        controls: {
            hideNoControlsWarning: boolean;
        };
    };
    argTypes: {
        size: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
    args: {
        size: string;
    };
};
export default _default;
export declare const Default: Story<ReactModalProps>;
export declare const ModalWithNoHeader: Story<ReactModalProps>;
export declare const ModalWithCotent: Story<ReactModalProps>;
