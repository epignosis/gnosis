import { FC, ReactNode } from "react";
export declare type BreadcrumbItemProps = {
    current?: boolean;
};
export declare type BreadcrumbProps = {
    children: ReactNode;
    breadcrumbEl?: Element | null;
    separator?: string;
};
export declare type BreadcrumbCompoundProps = {
    Item: FC<BreadcrumbItemProps>;
};
declare const Breadcrumb: FC<BreadcrumbProps> & BreadcrumbCompoundProps;
export default Breadcrumb;
