import { css, SerializedStyles, Theme } from "@emotion/react";
import { TypographyLevels } from "@theme/utils/typography";

export const mainNavContainer = ({ sidebar }: Theme): SerializedStyles => css`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${sidebar.background};
  color: ${sidebar.color};
  z-index: 1001;

  .nav-items-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0 0 1.75rem;
  }
`;

export const navHandleContainer = ({ sidebar }: Theme): SerializedStyles => css`
  min-height: 4.5rem;
  width: 100%;
  background-color: transparent;
  padding: 0;
  border: 0;

  .nav-item {
    height: 100%;
    border-bottom: 1px solid ${sidebar.border};
  }
`;

export const navItemContainer = (
  { sidebar, typeScaleSizes }: Theme,
  fontSize: TypographyLevels,
): SerializedStyles => css`
  display: flex;
  align-items: center;
  color: ${sidebar.color};
  padding: 0.625rem 1.5rem;

  &:hover,
  &.selected,
  &.focus-visible {
    background: ${sidebar.backgroundHover};
    color: ${sidebar.colorHover};
  }

  &.profile-item {
    padding: 0.5rem 1.125rem;

    img {
      border: none;
    }

    .title {
      margin-left: 0.25rem;
    }
  }

  .title {
    margin-left: 0.5rem;
    font-size: ${typeScaleSizes[fontSize]};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 12rem;
  }
`;
