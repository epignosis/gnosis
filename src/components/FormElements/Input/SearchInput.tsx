import React, { FC, useEffect, useState, MouseEvent } from "react";
import { useDebounceFn } from "ahooks";
import { MagnifierSVG } from "../../../icons/";
import { searchInputContainer } from "./styles";
import Input from "./Input";

type SearchInputProps = React.HTMLAttributes<HTMLInputElement> & {
  id: string;
  placeholder: string;
  onInputChanged: (inputValue: string) => void;
  delayBeforeSearch?: number;
  resetInput?: boolean;
};

const SearchInput: FC<SearchInputProps> = ({
  id,
  placeholder,
  onInputChanged,
  delayBeforeSearch = 500,
  resetInput = false,
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
        onClear={(e?: MouseEvent<HTMLDivElement>): void => clearSearch(e)}
      />
    </div>
  );
};

export default SearchInput;
