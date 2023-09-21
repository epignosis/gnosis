import { ExtendableProps } from "types/utils";

export type PaginationProps = ExtendableProps<
  React.HTMLAttributes<HTMLDivElement>,
  {
    page: number;
    pageSize: number;
    perPageText: string;
    totalPages: number;
    rowsPerPageOptions: PaginationDropDownOptions[];
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
  }
>;

export type PaginationDropDownOptions = {
  value: number;
  label: string;
};
