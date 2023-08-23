import type {
  GroupBase,
  MenuListProps,
  Props as ReactSelectProps,
  SingleValue,
  ValueContainerProps,
} from "react-select";

export type Status = "valid" | "error";

export type CustomOptionType = {
  label: string;
  value: string;
};

export type CustomTypeParam = SingleValue<CustomOptionType>;

export type CustomSelectProps<
  Option extends CustomOptionType,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = ReactSelectProps<Option, IsMulti, Group> & {
  label?: string;
  size?: "sm" | "md" | "lg";
  inline?: boolean;
  status?: "valid" | "error";
  hasInnerSearch?: boolean;
  onMenuInputFocus?: () => void;
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
