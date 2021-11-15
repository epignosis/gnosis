import React, { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { SerializedStyles } from "@emotion/react";
import { container } from "./styles";

export type BreadcrumbItemProps = {
  current?: boolean;
};

const Item: FC<BreadcrumbItemProps> = ({ children, current = false }) => {
  return <li className={current ? "breadcrumb-item current" : "breadcrumb-item"}>{children}</li>;
};

export type BreadcrumbProps = React.HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  breadcrumbEl?: Element | null;
  separator?: string;
};

export type BreadcrumbCompoundProps = {
  Item: FC<BreadcrumbItemProps>;
};

const Breadcrumb: FC<BreadcrumbProps> & BreadcrumbCompoundProps = ({
  children,
  breadcrumbEl = null,
  separator = "/",
  ...rest
}) => {
  const breadcrumb = (
    <nav
      css={(theme): SerializedStyles => container(theme, { separator })}
      aria-label="breadcrumbs"
      {...rest}
    >
      <ol>{children}</ol>
    </nav>
  );

  return breadcrumbEl ? createPortal(breadcrumb, breadcrumbEl) : breadcrumb;
};

Breadcrumb.Item = Item;

export default Breadcrumb;
