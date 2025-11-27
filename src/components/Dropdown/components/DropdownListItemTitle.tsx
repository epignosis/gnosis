import React, { FC } from "react";
import Text from "../../Text/Text";
import { DropdownListItemTitleStyles } from "./styles";
import { TypographyLevels } from "@theme/utils/typography";

type DropdownListItemTitleProps = {
  label: string | JSX.Element;
  level: number;
  isSearchable: boolean;
  textSize: TypographyLevels;
};

const DropdownListItemTitle: FC<DropdownListItemTitleProps> = ({
  label,
  level,
  isSearchable,
  textSize,
}) => {
  return (
    <li
      aria-disabled="true"
      tabIndex={-1}
      css={DropdownListItemTitleStyles({ level, isSearchable })}
    >
      {typeof label === "string" ? (
        <Text fontSize={textSize} weight="700" title={label}>
          {label}
        </Text>
      ) : (
        label
      )}
    </li>
  );
};

export default DropdownListItemTitle;
