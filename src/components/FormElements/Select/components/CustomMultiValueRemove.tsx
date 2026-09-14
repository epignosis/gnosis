import React, { FC, memo } from "react";
import { components, MultiValueRemoveProps } from "react-select";
import { CustomOption } from "../types";

const CustomMultiValueRemove: FC<MultiValueRemoveProps<CustomOption>> = (props) => {
  const { data, innerProps, selectProps } = props;
  const optionLabel =
    typeof data.label === "string" ? data.label : selectProps.getOptionLabel?.(data) ?? "option";

  return (
    <components.MultiValueRemove
      {...props}
      innerProps={{
        ...innerProps,
        "aria-label": `Remove ${optionLabel}`,
      }}
    />
  );
};

export default memo(CustomMultiValueRemove);
