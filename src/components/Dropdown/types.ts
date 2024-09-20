import { HTMLAttributes, ReactNode } from "react";
import { TypographyLevels } from "@theme/utils/typography";
import { TippyProps } from "@tippyjs/react";

export type DropdownItem = {
  label: string | JSX.Element;
  value?: string;
  id?: string;
  icon?: JSX.Element | SVGAElement;
  className?: string;
  items?: DropdownItem[];
  category?: string;
  isDisabled?: boolean;
  tooltipContent?: TippyProps["content"];
};

export type DropdownProps = HTMLAttributes<HTMLDivElement> & {
  list: DropdownItem[];
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
