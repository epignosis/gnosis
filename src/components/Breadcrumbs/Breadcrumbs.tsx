import React from "react";
import classNames from "classnames";
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
  highlightActivePage?: boolean;
  navAriaLabel?: string;
  linkAriaLabel?: (label: string) => string;
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  highlightActivePage = false,
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
            <li
              key={item.label}
              data-testid="breadcrumb-item"
              className={classNames("breadcrumbs__item", {
                "breadcrumbs__item--current": highlightActivePage && isLast,
              })}
            >
              <a
                aria-label={linkAriaLabel(item.label)}
                aria-current={highlightActivePage && isLast ? "page" : undefined}
                href={item.href}
                onClick={item.onClick}
                className={classNames("breadcrumbs__link", {
                  "breadcrumbs__link--current": highlightActivePage && isLast,
                  "breadcrumbs__link--empty": !item.href,
                })}
              >
                {item.label}
              </a>

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
