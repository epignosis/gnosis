import { css, Theme, SerializedStyles } from "@emotion/react";
import { mq } from "@theme/utils/breakpoints";

export const container = css`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;

  #content {
    flex: 1;
    z-index: 0;
  }
`;

export const tabsHeader = (
  { tabs }: Theme,
  { stickyHeader }: { stickyHeader?: boolean },
): SerializedStyles => {
  return css`
    display: flex;
    flex-wrap: wrap;
    padding: 0 1rem;
    white-space: nowrap;
    background: ${tabs.headerBackground};
    position: ${stickyHeader ? "sticky" : "static"};
    top: ${stickyHeader ? 0 : "auto"};
    z-index: ${stickyHeader ? 1 : 0};

    ${mq["sm"]} {
      padding: 0 2rem;
      flex-wrap: nowrap;
      border-bottom: 1px solid ${tabs.headerBorder};
    }
  `;
};

export const tabNavItem = (
  { tabs }: Theme,
  { isActive }: { isActive: boolean },
): SerializedStyles => {
  return css`
    font-weight: ${isActive ? "700" : "400"};
    margin: 0 1rem 0 0;
    padding: 0.6rem;
    color: ${tabs.linkNormal};
    border-bottom: 4px solid ${isActive ? tabs.linkBorder : "transparent"};
  `;
};

export const tabsContent = (isActive: boolean): SerializedStyles => css`
  height: 100%;
  display: ${isActive ? "block" : "none"};
  overflow-y: auto;
`;
