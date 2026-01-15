import { css, SerializedStyles, Theme } from "@emotion/react";
import { StatusIndicatorType } from "./StatusIndicator";
import { mq } from "@theme/utils/breakpoints";

export const drawerHeader = ({ noGutters }: { noGutters: boolean }): SerializedStyles => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: ${noGutters ? 0 : "2rem 0"};
    padding-block: ${noGutters ? 0 : "1rem"};
    height: 100%;
    max-height: 4.5rem;

    ${mq["sm"]} {
      padding: ${noGutters ? 0 : "1rem 2rem"};
    }
  `;
};

export const drawerBody = css`
  height: 100%;
  overflow-y: auto;
`;

export const maskContainer = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.45);
`;

export const footerContainer = ({ drawer }: Theme): SerializedStyles => {
  return css`
    border-top: 1px solid ${drawer.border};

    .drawer-footer__divider {
      border-top: 1px solid ${drawer.border};
    }

    .drawer-footer__content {
      padding: 1rem;

      ${mq["md"]} {
        padding: 2rem;
      }
    }
  `;
};

export const statusIndicatorStyles = (
  { drawer }: Theme,
  type: StatusIndicatorType,
): SerializedStyles => {
  return css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 2rem 0.5rem 1.5rem;

    .drawer-status-indicator__icon-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .drawer-status-indicator__icon {
      display: flex;
      color: ${drawer[type].color};
    }

    .drawer-status-indicator__text {
      word-break: break-word;
      margin: 0;
    }
  `;
};
