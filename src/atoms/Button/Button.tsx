import React, { FC } from "react";
import { SerializedStyles } from "@emotion/react";
import { btnContainer } from "./styles";

const Button: FC = () => {
  return <button css={(theme): SerializedStyles => btnContainer(theme)}>Button</button>;
};

export default Button;
