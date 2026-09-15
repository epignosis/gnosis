import React, { FC, memo } from "react";
import { components, MultiValueRemoveProps } from "react-select";
import { CustomOption } from "../types";

const CustomMultiValueRemove: FC<MultiValueRemoveProps<CustomOption>> = (props) => {
  const { data, innerProps, selectProps } = props;
  const ariaLabel = `Remove ${selectProps.getOptionLabel(data)}`;

  return (
    <components.MultiValueRemove
      {...props}
      innerProps={{ ...innerProps, "aria-label": ariaLabel }}
    />
  );
};

export default memo(CustomMultiValueRemove);
