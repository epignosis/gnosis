import React, { FC, useRef } from "react";
import { SelectInstance } from "react-select";
import CustomSelect from "./Select";
import { CustomOptionType, CustomTypeParam } from "./types";

const Test: FC = () => {
  const handleOnChange = (v: CustomTypeParam) => {
    // eslint-disable-next-line no-console
    console.log("test", v);
  };

  const ref = useRef<SelectInstance<CustomOptionType>>(null);

  return (
    <CustomSelect
      ref={ref}
      id="sorting"
      containerAttrs={{ className: "select-wrapper" }}
      isRtl={false}
      onChange={handleOnChange}
      options={[
        {
          label: "name",
          value: "name",
        },
      ]}
    />
  );
};

export default Test;
