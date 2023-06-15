import { ExtendableProps } from "types/utils";

export type PaginationProps = ExtendableProps<
  React.HTMLAttributes<HTMLDivElement>,
  {
    current: number;
    totalPages: number;
    list: RowItem[];
    selectionText: string;
    size: number;
    handlePaginationSizeChanged: (size: number) => void;
    handlePaginationNumberChanged: (page: number) => void;
  }
>;

export type RowItem = {
  id: number;
  value: string;
};
