import React from "react";
import { cardBody } from "./styles";
import { FCWithChildren } from "types/common";

export type BodyProps = FCWithChildren;

const Body: BodyProps = ({ children }) => (
  <section css={cardBody} className="card-body-container">
    {children}
  </section>
);

export default Body;
