import { css, Theme } from "@emotion/react";

export const breadcrumbsStyles = ({ breadcrumbs }: { breadcrumbs: Theme["breadcrumbs"] }) => css`
  display: flex;
  align-items: center;
  font-size: 1.125rem;

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

    &[href=""] {
      color: ${breadcrumbs.currentPath};
      pointer-events: none;
      cursor: default;
    }
  }

  & .breadcrumbs__item--current {
    color: ${breadcrumbs.currentPath};
    font-size: 1.375rem;
    font-weight: 700;
    pointer-events: none;
    cursor: default;
  }

  & .breadcrumbs__separator {
    display: flex;
    color: ${breadcrumbs.separator};
  }
`;
