import { css, Theme, SerializedStyles } from "@emotion/react";

export const container = css`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;

  #content {
    flex: 1;
    z-index: 0;
  }

  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const tabsHeader = (
  { tabs }: Theme,
  { stickyHeader }: { stickyHeader?: boolean },
): SerializedStyles => {
  return css`
    display: flex;
    flex-wrap: nowrap;
    padding: 0;
    white-space: nowrap;
    background: ${tabs.headerBackground};
    position: ${stickyHeader ? "sticky" : "static"};
    top: ${stickyHeader ? 0 : "auto"};
    z-index: ${stickyHeader ? 1 : 0};
    width: 100%;
    overflow-x: auto;
    border-bottom: 1px solid ${tabs.headerBorder};
    align-items: center;

    &::-webkit-scrollbar {
      display: none;
    }

    .inline-end-component {
      margin-inline-start: auto;
    }
  `;
};

export const tabNavItem = (
  { tabs, body }: Theme,
  { isActive }: { isActive: boolean },
): SerializedStyles => {
  return css`
    font-weight: ${isActive ? "700" : "400"};
    margin-inline: 0 1rem;
    margin-block: 0;
    padding: 0.6rem;
    color: ${body.color};
    border-bottom: 4px solid ${isActive ? tabs.linkBorder : "transparent"};

    &:hover {
      color: ${tabs.linkHover};
      cursor: pointer;
    }
  `;
};
