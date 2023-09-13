import type { GroupBase, MenuListProps, Props, ValueContainerProps } from "react-select";

export type Status = "valid" | "error";

export type CustomOption = {
  label: string;
  value: string;
};

// Here we are extending the react-select types to add <Select..
declare module "react-select/dist/declarations/src/Select" {
  export interface Props<
    Option extends CustomOption,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>,
  > {
    innerPlaceholder?: string;
    hasInnerSearch?: boolean;
    isMulti: IsMulti; // this is required to relieve TS warning
    group?: Group; // this is required to relieve TS warning
    onMenuInputFocus?: () => void;
  }
}

// here we are adding our custom props to the react-select types
export type CustomSelectProps<
  Option extends CustomOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = Props<Option, IsMulti, Group> & {
  label?: string;
  size?: "sm" | "md" | "lg";
  inline?: boolean;
  status?: "valid" | "error";
  hasInnerSearch?: boolean;
  innerPlaceholder?: string;
  isInlineFlex?: boolean;
  minWidth?: string;
  maxWidth?: string;
  isCreatable?: boolean;
  creatableTooltip?: string;
};

export type CustomMenuListProps<
  Option extends CustomOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = MenuListProps<Option, IsMulti, Group> & {
  innerPlaceholder?: string;
  hasInnerSearch?: boolean;
};

export type CustomValueContainerProps<
  Option extends CustomOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = ValueContainerProps<Option, IsMulti, Group> & {
  isFocused?: boolean;
};
