import React, { FC, useEffect, useState, MouseEvent } from "react";
import { useDebounceFn } from "ahooks";
import { MagnifierSVG } from "../../../icons/";
import { searchInputContainer } from "./styles";
import Input from "./Input";

type SearchInputProps = React.HTMLAttributes<HTMLInputElement> & {
  id: string;
  placeholder: string;
  delayBeforeSearch?: number;
  resetInput?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  onInputChanged: (inputValue: string) => void;
};

const SearchInput: FC<SearchInputProps> = ({
  id,
  placeholder,
  delayBeforeSearch = 500,
  resetInput = false,
  autoFocus = false,
  disabled = false,
  onInputChanged,
  ...rest
}) => {
  const [searchValue, setSearchValue] = useState("");
  const { run } = useDebounceFn(
    (value) => {
      onInputChanged(value);
    },
    { wait: delayBeforeSearch },
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setSearchValue(value);
    run(value);
  };

  useEffect(() => {
    if (resetInput) clearSearch();
  }, [resetInput]);

  const clearSearch = (e?: MouseEvent<HTMLDivElement>): void => {
    if (e) {
      e.stopPropagation();
    }
    onInputChanged("");
    setSearchValue("");
  };

  return (
    <div css={searchInputContainer} {...rest}>
      <Input
        id={id}
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInputChange}
        autoComplete="off"
        iconAfter={MagnifierSVG}
        showVerticalLine={false}
        isClearable={true}
        autoFocus={autoFocus}
        onClear={(e?: MouseEvent<HTMLDivElement>): void => clearSearch(e)}
        disabled={disabled}
      />
    </div>
  );
};

export default SearchInput;
