import React, { FC } from "react";
import { drawerBody } from "./styles";

const Body: FC = ({ children }) => <div css={drawerBody}>{children}</div>;

export default Body;
