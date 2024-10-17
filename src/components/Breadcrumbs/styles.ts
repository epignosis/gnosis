import { css, Theme } from "@emotion/react";

export const breadcrumbsStyles = ({ breadcrumbs }: { breadcrumbs: Theme["breadcrumbs"] }) => css`
  display: flex;
  align-items: center;
  font-size: 0.875rem;

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

    &.breadcrumbs__link--current {
      color: ${breadcrumbs.currentPath};
      pointer-events: none;
    }
  }

  & .breadcrumbs__separator {
    display: flex;
    color: ${breadcrumbs.separator};
  }
`;
