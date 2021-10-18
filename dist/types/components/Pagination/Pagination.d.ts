import { FC } from "react";
export declare type PaginationProps = {
    current: number;
    totalPages: number;
    onChange: (page: number) => void;
    responsiveView?: boolean;
};
declare const Pagination: FC<PaginationProps>;
export default Pagination;
