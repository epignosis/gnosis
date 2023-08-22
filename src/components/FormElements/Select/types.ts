import type { GroupBase, Props as ReactSelectProps, SingleValue } from "react-select";

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
  options: Option[];
};
