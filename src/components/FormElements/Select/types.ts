import { MouseEvent } from "react";
import type { GroupBase, Props } from "react-select";

export type Status = "valid" | "error";

export type CustomOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type NestedCustomOption = CustomOption & {
  level?: number;
};

export type SelectType = "select" | "creatable" | "async";

// Here we are extending the react-select types with DS Select custom types to can access theme inside the react-select components
declare module "react-select/dist/declarations/src/Select" {
  export interface Props<
    Option extends CustomOption,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>,
  > {
    isMulti: IsMulti; // this is required to relieve TS warning
    group?: Group; // this is required to relieve TS warning
    tooltipContent?: string | JSX.Element;
    type?: SelectType;
    showMoreButton?: JSX.Element;
    shouldShowMenuList?: boolean;
    onMenuInputFocus?: () => void;
    handleShowMore?: (e: MouseEvent<HTMLButtonElement>) => void;
  }
}

// Here we are adding our custom props to the react-select types
// These custom types used from the DS Select component
export type CustomSelectProps<
  Option extends CustomOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = Props<Option, IsMulti, Group> & {
  type?: SelectType;
  required?: boolean;
  label?: string;
  size?: "sm" | "md" | "lg";
  inline?: boolean;
  status?: "valid" | "error";
  isInlineFlex?: boolean;
  minWidth?: string;
  maxWidth?: string;
  creatableTooltip?: string;
  tooltipContent?: string | JSX.Element;
  minNumberOfOptionsToEnableSearch?: number;
  menuMaxWidth?: number;
  isValidNewOption?: (input: string) => boolean;
  loadOptions?: (inputValue: string) => Promise<CustomOption[]>;
};
