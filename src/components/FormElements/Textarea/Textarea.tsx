import React, { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import { Label } from "../../../";
import { textareaContainer } from "./styles";
import { ExtendableProps } from "types/common";

export type TextareaResize = "none" | "horizontal" | "vertical" | "both";

export type TextareaProps = ExtendableProps<
  InputHTMLAttributes<HTMLTextAreaElement>,
  {
    id: string;
    label?: string;
    inline?: boolean;
    resize?: TextareaResize;
    status?: "valid" | "error";
  }
>;
const Textarea: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = (
  props,
  forwardedRef,
) => {
  const { label, inline = false, id, resize = "none", status = "valid", ...rest } = props;
  const hasLabel = Boolean(label);
  const containerClassNames = classNames({
    inline: hasLabel && inline,
    valid: status === "valid",
    error: status === "error",
  });

  return (
    <div
      css={(theme): SerializedStyles => textareaContainer(theme, { resize })}
      className={containerClassNames}
    >
      {hasLabel && <Label htmlFor={id}>{label}</Label>}
      <textarea id={id} ref={forwardedRef} {...rest} />
    </div>
  );
};

export default forwardRef(Textarea);
