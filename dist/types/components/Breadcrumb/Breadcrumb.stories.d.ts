import React from "react";
import { Story } from "@storybook/react";
import { BreadcrumbProps } from "./Breadcrumb";
declare const _default: {
    component: React.FC<BreadcrumbProps> & import("./Breadcrumb").BreadcrumbCompoundProps;
    title: string;
    argTypes: {
        breadcrumbEl: {
            control: boolean;
        };
    };
};
export default _default;
export declare const OneBreadcrumb: Story<BreadcrumbProps>;
export declare const MultipleBreadcrumbs: Story<BreadcrumbProps>;
