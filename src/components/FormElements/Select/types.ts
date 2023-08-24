import type {
  GroupBase,
  MenuListProps,
  Props,
  SingleValue,
  ValueContainerProps,
} from "react-select";

export type Status = "valid" | "error";

export type CustomOptionType = {
  label: string;
  value: string;
};

export type CustomTypeParam = SingleValue<CustomOptionType>;

declare module "react-select/dist/declarations/src/Select" {
  export interface Props<
    Option extends CustomOptionType,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>,
  > {
    onMenuInputFocus: () => void;
    isFocused: boolean;
    IsMulti: IsMulti;
  }
}

export type CustomSelectProps<
  Option extends CustomOptionType,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = Props<Option, IsMulti, Group> & {
  label?: string;
  size?: "sm" | "md" | "lg";
  inline?: boolean;
  status?: "valid" | "error";
  hasInnerSearch?: boolean;
};

export type CustomMenuListProps<
  Option extends CustomOptionType,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = MenuListProps<Option, IsMulti, Group>;

export type CustomValueContainerProps<
  Option extends CustomOptionType,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = ValueContainerProps<Option, IsMulti, Group>;
