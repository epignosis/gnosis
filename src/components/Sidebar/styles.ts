import { css, SerializedStyles, Theme } from "@emotion/react";
import { TypographyLevels } from "@theme/utils/typography";

export const mainNavContainer = ({ sidebar }: Theme, width: string): SerializedStyles => css`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${sidebar.background};
  color: ${sidebar.color};
  z-index: 1001;
  max-width: ${width};

  .nav-items-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1.5rem 0;
  }
`;

export const navHandleContainer = ({ sidebar }: Theme): SerializedStyles => css`
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
  padding: 0.25rem 1.5rem;

  .icon-container {
    height: 2rem;
  }

  &:hover,
  &.selected,
  &.focus-visible {
    background: ${sidebar.backgroundHover};
    color: ${sidebar.colorHover};
  }

  .title {
    margin-inline-start: 0.5rem;
    font-size: ${typeScaleSizes[fontSize]};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
`;
