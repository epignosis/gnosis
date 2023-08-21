import { ReactNode } from "react";
import type { GroupBase } from "react-select";

type Status = "valid" | "error";

type SelectOption = {
  label: string;
  value: string;
};

declare module "react-select/dist/declarations/src/Select" {
  export interface Props<
    Option extends SelectOption,
    IsMulti extends boolean,
    Group extends GroupBase<Option>,
  > {
    status?: Status;
    label?: string;
    inline?: boolean;
    containerAttrs?: React.HTMLAttributes<HTMLDivElement>;
    isMulti: IsMulti;
    formatGroupLabel: (group: Group) => ReactNode;
  }
}
