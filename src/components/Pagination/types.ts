import { ExtendableProps } from "types/utils";

export type PaginationProps = ExtendableProps<
  React.HTMLAttributes<HTMLDivElement>,
  {
    page: number;
    pageSize: number;
    translations: TranslationsType;
    a11yTranslations: TranslationsType;
    totalPages: number;
    disabled?: boolean;
    rowsPerPageOptions: PaginationDropDownOptions[];
    listPlacement?: ListPlacement;
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
  }
>;

type TranslationsType = {
  perPage: string;
  nextPage: string;
  previousPage: string;
  firstPage: string;
  lastPage: string;
  ofPages: string;
};

export type PaginationDropDownOptions = {
  value: number;
  label: string;
};

export type ListPlacement = "top" | "bottom";
