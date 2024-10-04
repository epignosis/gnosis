import React from "react";
import { drawerBody } from "./styles";
import { FCWithChildren } from "types/common";

const Body: FCWithChildren = ({ children }) => <div css={drawerBody}>{children}</div>;

export default Body;
