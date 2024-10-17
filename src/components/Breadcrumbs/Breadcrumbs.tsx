import React from "react";
import { SerializedStyles } from "@emotion/react";
import { ArrowRightChevronSVG } from "../../icons";
import { breadcrumbsStyles } from "./styles";

export type BreadcrumbItem = {
  label: string;
  href?: string;
  onClick?: () => void;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  navAriaLabel?: string;
  linkAriaLabel?: (label: string) => string;
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  navAriaLabel = "Breadcrumb navigation",
  linkAriaLabel = (label) => `Breadcrumb link to ${label}`,
}) => {
  return (
    <nav aria-label={navAriaLabel}>
      <ul
        data-testid="breadcrumbs"
        className="breadcrumbs__list"
        css={(theme): SerializedStyles => breadcrumbsStyles(theme)}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="breadcrumbs__item" data-testid="breadcrumb-item">
              {!isLast ? (
                <a
                  aria-label={linkAriaLabel(item.label)}
                  href={item.href}
                  onClick={item.onClick}
                  className="breadcrumbs__link"
                >
                  {item.label}
                </a>
              ) : (
                <span
                  aria-current="page"
                  className="breadcrumbs__item--current"
                  data-testid="breadcrumb-current-page"
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span aria-hidden="true" className="breadcrumbs__separator">
                  <ArrowRightChevronSVG height="32" data-testid="arrow-icon" />
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
