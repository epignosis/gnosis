import React, { FC } from "react";
import { cardBody } from "./styles";

export type BodyProps = FC;

const Body: BodyProps = ({ children }) => <section css={cardBody}>{children}</section>;

export default Body;
