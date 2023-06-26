import { ExtendableProps } from "types/utils";

export type PaginationProps = ExtendableProps<
  React.HTMLAttributes<HTMLDivElement>,
  {
    page: number;
    pageSize: number;
    totalPages: number;
    rowsPerPageOptions: RowsPerPageOption[];
    selectionText: string;
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
  }
>;

export type RowsPerPageOption = {
  value: number;
  label: string;
};
