import { ReactNode } from "react";
import { TypographyLevels } from "@theme/utils/typography";

export type DropdownItem = {
  label: string | JSX.Element;
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
  fixPlacement?: boolean;
  emptyStateText?: string;
  placeholderText?: string;
  remainOpenOnSelect?: boolean;
  onListItemSelect?: (item: DropdownItem) => void;
};

export type PlacementOptions = "bottom-start" | "bottom-end" | "top-start" | "top-end" | "end-top";
