import { ReactNode } from "react";
import { TypographyLevels } from "@theme/utils/typography";

export type DropdownItem = {
  label: string;
  value?: string;
  id?: string;
  icon?: JSX.Element | SVGAElement;
  className?: string;
  items?: DropdownItem[];
  category?: string;
};

export type DropdownProps = {
  list: DropdownItem[];
  children: ReactNode;
  placement?: PlacementOptions;
  isSearchable?: boolean;
  textSize?: TypographyLevels;
  fullWidth?: boolean;
  scrollToBottom?: boolean;
  onListItemSelect?: (item: DropdownItem) => void;
  emptyStateText?: string;
};

type PlacementOptions = "bottom-start" | "bottom-end" | "top-start" | "top-end" | "end-top";
