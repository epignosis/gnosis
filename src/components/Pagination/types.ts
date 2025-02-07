import { ExtendableProps } from "types/utils";

export type PaginationProps = ExtendableProps<
  React.HTMLAttributes<HTMLDivElement>,
  {
    page: number;
    pageSize: number;
    translations: PaginationTranslations;
    a11yTranslations: PaginationA11yTranslations;
    totalPages: number;
    disabled?: boolean;
    rowsPerPageOptions: PaginationDropDownOptions[];
    listPlacement?: ListPlacement;
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
  }
>;

type PaginationTranslations = {
  perPage: string;
  nextPage: string;
  previousPage: string;
  firstPage: string;
  lastPage: string;
  ofPages: string;
};

type PaginationA11yTranslations = PaginationTranslations;

export type PaginationDropDownOptions = {
  value: number;
  label: string;
};

export type ListPlacement = "top" | "bottom";
