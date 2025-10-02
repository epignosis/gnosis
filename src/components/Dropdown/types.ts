import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { TippyProps } from "@tippyjs/react";
import { TypographyLevels } from "@theme/utils/typography";

export type DropdownItem = {
  label: string | JSX.Element;
  originalText?: string; // Can be used when the label is JSX.Element and the dropdown is searchable
  value?: string;
  id?: string;
  icon?: JSX.Element | SVGAElement | ReactElement;
  className?: string;
  items?: DropdownItem[];
  category?: string;
  isDisabled?: boolean;
  tooltipContent?: TippyProps["content"];
  divider?: boolean;
};

export type DropdownProps = HTMLAttributes<HTMLDivElement> & {
  list: DropdownItem[] | DropdownItem[][];
  children: ReactNode;
  placement?: PlacementOptions;
  isSearchable?: boolean;
  textSize?: TypographyLevels;
  prependContent?: ReactNode;
  hover?: boolean;
  fullWidth?: boolean;
  fixPlacement?: boolean;
  emptyStateText?: string;
  placeholderText?: string;
  remainOpenOnSelect?: boolean;
  onListItemSelect?: (item: DropdownItem) => void;
  onToggleList?: (isListOpen: boolean) => void;
  disabled?: boolean;
};

export type PlacementOptions = "bottom-start" | "bottom-end" | "top-start" | "top-end" | "end-top";
