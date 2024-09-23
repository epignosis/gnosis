import React, { FC } from "react";
import { components } from "react-select";
import { SerializedStyles } from "@emotion/react";
import { customMenuList } from "../styles";
import { CustomMenuListProps, CustomOption } from "../types";
import Loader from "../../../Loaders/Loader";

const { MenuList } = components;

const CustomMenuList: FC<CustomMenuListProps<CustomOption, boolean>> = (customMenuProps) => {
  const { selectProps, ...props } = customMenuProps;
  const { inputValue, asyncOptions, type, menuIsOpen, shouldShowMenuList } = selectProps;

  const { status, initialText } = asyncOptions ?? {};
  const isAsync = type === "async";
  const showLoading = isAsync ? Boolean(status?.isLoading) : false;
  const showMenuList = isAsync
    ? Boolean(!status?.isLoading && inputValue) || shouldShowMenuList
    : menuIsOpen;
  const showInitialText =
    Boolean(initialText) && (isAsync ? Boolean(!status?.isLoading && !inputValue) : false);

  return (
    <div css={(): SerializedStyles => customMenuList()}>
      {showLoading && (
        <div className="loader-container">
          <Loader size="md" />
        </div>
      )}
      {showMenuList && <MenuList {...props} selectProps={selectProps} />}
      {showInitialText && <div className="text-container">{initialText}</div>}
    </div>
  );
};

export default CustomMenuList;
