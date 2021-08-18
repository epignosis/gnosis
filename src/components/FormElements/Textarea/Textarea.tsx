import React, { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import { textareaContainer } from "./styles";
import { Label } from "@components";

export type TextareaResize = "none" | "horizontal" | "vertical" | "both";

export type TextareaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  altLabel?: boolean;
  resize?: TextareaResize;
  status?: "valid" | "error";
};
const Textarea: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = (
  props,
  forwardedRef,
) => {
  const { label, altLabel = false, id, resize = "none", status = "valid", ...rest } = props;
  const hasLabel = Boolean(label);
  const containerClassNames = classNames({
    "alt-label": hasLabel && altLabel,
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
