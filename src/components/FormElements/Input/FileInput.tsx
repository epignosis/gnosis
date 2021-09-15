import React, { FC, InputHTMLAttributes } from "react";
import { Label } from "../../../";
import { fileInputContainer } from "./styles";
import { ExtendableProps } from "types/utils";

export type FileInputProps = ExtendableProps<
  InputHTMLAttributes<HTMLInputElement>,
  {
    id: string;
    name: string;
    label?: string;
    type?: never;
    children?: never;
  }
>;

const FileInput: FC<FileInputProps> = ({ id, label, name, ...rest }) => (
  <div css={fileInputContainer}>
    <label htmlFor={id}>
      <Label id={`${id}-${name}`}>{label}</Label>
      <div className="drop-area">
        <input id={id} type="file" name={name} {...rest} aria-describedby={`${id}-${name}`} />
      </div>
    </label>
  </div>
);

export default FileInput;
