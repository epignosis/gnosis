import { ExtendableProps } from "types/utils";

export type PaginationProps = ExtendableProps<
  React.HTMLAttributes<HTMLDivElement>,
  {
    page: number;
    pageSize: number;
    translations: {
      perPage: string;
      nextPage: string;
      previousPage: string;
      firstPage: string;
      lastPage: string;
      ofPages: string;
    };
    totalPages: number;
    rowsPerPageOptions: PaginationDropDownOptions[];
    listPlacement?: ListPlacement;
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
  }
>;

export type PaginationDropDownOptions = {
  value: number;
  label: string;
};

export type ListPlacement = "top" | "bottom";
