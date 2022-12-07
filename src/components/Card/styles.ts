import { css, Theme, SerializedStyles } from "@emotion/react";
import { hexToRGBA } from "@theme/default/colors";

export const cardContainer = ({ card }: Theme): SerializedStyles => css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: ${card.background};
  box-shadow: 0px 0px 10px #00000026;
  border-radius: 5px;
  overflow: hidden;
  transition-duration: 0.2s;
  transition-property: background-color, color, box-shadow 0.1s ease-in-out;

  :hover {
    box-shadow: 0px 4px 20px ${card.shadow};
    transition: all 0.2s ease;
  }
`;

export const courseHeaderContainer = css`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const thumbnailContainer = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const hoverContainer = (
  { card }: Theme,
  { transparent }: { transparent?: boolean },
): SerializedStyles => {
  return css`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${transparent ? "transparent" : card.hover.background};

    .hover-wrapper {
      height: 100%;
      width: 100%;
    }
  `;
};

export const cardBody = css`
  padding: 0.75rem 1rem 1.5rem;
`;

export const overlayContainer = ({ card }: Theme): SerializedStyles => css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${hexToRGBA(card.overlay.background, 0.6)};
  z-index: 2;
`;

export const drawerContainer = ({ card }: Theme): SerializedStyles => css`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  background-color: ${card.background};
  z-index: 3;

  .content-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;

      /* TODO: Remove when our Button link variant is ready */
      button {
        background-color: transparent;
        padding: 0;
        border: 0;
      }
    }

    footer {
      margin-top: 0.5rem;
    }
  }
`;
