import React, { forwardRef, ForwardRefRenderFunction } from "react";
import classNames from "classnames";
import { option } from "./styles";

export type OptionProps = React.PropsWithRef<JSX.IntrinsicElements["li"]> & {
  isSelected: boolean;
  isHighlighted: boolean;
};

const Option: ForwardRefRenderFunction<HTMLLIElement, OptionProps> = (props, forwardedRef) => {
  const { isSelected, isHighlighted, children, ...rest } = props;
  const containerClassNames = classNames({
    highlighted: isHighlighted,
    selected: isSelected,
  });

  return (
    <li ref={forwardedRef} css={option} className={containerClassNames} {...rest}>
      <span /> {children}
    </li>
  );
};

export default forwardRef(Option);
