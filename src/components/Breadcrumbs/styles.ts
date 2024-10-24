import { css, Theme } from "@emotion/react";

export const breadcrumbsStyles = ({
  breadcrumbs,
  typeScaleSizes,
}: {
  breadcrumbs: Theme["breadcrumbs"];
  typeScaleSizes: Theme["typeScaleSizes"];
}) => css`
  display: flex;
  align-items: center;
  font-size: ${typeScaleSizes["sm"]};
  font-weight: 700;

  &.breadcrumbs__list {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  & .breadcrumbs__item {
    display: flex;
    align-items: center;
  }

  & .breadcrumbs__link {
    text-decoration: none;
    color: ${breadcrumbs.link};

    &.breadcrumbs__link--current,
    &.breadcrumbs__link--empty:not(.breadcrumbs__link--current) {
      color: ${breadcrumbs.black};
      pointer-events: none;
    }
  }

  & .breadcrumbs__separator {
    display: flex;
    color: ${breadcrumbs.separator};
  }
`;
