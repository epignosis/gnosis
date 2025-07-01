import type { GroupBase, Props } from "react-select";
import { InputSize } from "../Input/Input";

export type Status = "valid" | "error";

export type CustomOption = {
  label: string;
  value: string;
  disabled?: boolean;
  hint?: string;
};

export type NestedCustomOption = CustomOption & {
  level?: number;
};

export type SelectType = "select" | "creatable" | "async";

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
  size?: InputSize;
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
  defaultOptions?: boolean;
  cacheOptions?: boolean;
  allowTextWrap?: boolean;
};
