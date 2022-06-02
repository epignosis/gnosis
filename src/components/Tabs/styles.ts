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

    ${mq["sm"]} {
      border-bottom: 1px solid ${tabs.headerBorder};
    }

    &::-webkit-scrollbar {
      display: none;
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
