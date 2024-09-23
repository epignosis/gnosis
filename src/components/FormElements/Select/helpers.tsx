import React from "react";
import classNames from "classnames";
import AsyncSelect from "react-select/async";
import ReactSelect, { FormatOptionLabelContext } from "react-select";
import CreatableSelect from "react-select/creatable";
import { SerializedStyles } from "@emotion/react";
import { CarretArrowRight } from "../../../icons/";
import { SelectType, CustomSelectProps, CustomOption } from "./types";
import { customLabelStyles } from "./styles";

export const containerClassNames = (status: string, size: string) =>
  classNames({
    [`control-${size}`]: true,
    valid: status === "valid",
    error: status === "error",
  });

export const formatOptionLabel = (
  { label = "", level = 0 },
  { context }: { context: FormatOptionLabelContext },
): JSX.Element => {
  if (!level || context === "value") return <>{label}</>;

  const isRtl = document.dir === "rtl";
  const rotation = isRtl ? 180 : 0;

  return (
    <span css={(): SerializedStyles => customLabelStyles({ level })}>
      {level ? (
        <CarretArrowRight height={10} style={{ transform: `rotate(${rotation}deg)` }} />
      ) : null}
      <span>{label} wtfffff</span>
    </span>
  );
};

export const renderSelect = (
  type: SelectType,
  customSelectProps: CustomSelectProps<CustomOption, boolean>,
) => {
  const { loadOptions } = customSelectProps ?? {};

  switch (type) {
    case "creatable":
      return (
        <CreatableSelect
          {...customSelectProps}
          createOptionPosition="first"
          formatOptionLabel={formatOptionLabel}
        />
      );
    case "async":
      return <AsyncSelect {...customSelectProps} type="async" loadOptions={loadOptions} />;
    default:
      return <ReactSelect {...customSelectProps} formatOptionLabel={formatOptionLabel} />;
  }
};
