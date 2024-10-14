import { css, Theme } from "@emotion/react";
import { statusTagSizes } from "./StatusTag";
import { colors } from "@theme/default/colors";

export const statusTagStyles = (
  {
    statusTag,
    typeScaleSizes,
  }: { statusTag: Theme["statusTag"]; typeScaleSizes: Theme["typeScaleSizes"] },
  size: statusTagSizes,
) => {
  return css`
    display: inline-flex;
    height: ${size === statusTagSizes.MD ? "2rem" : "1.25rem"};
    padding: ${size === statusTagSizes.MD ? "0.5rem" : "0.125rem 0.25rem"};
    align-items: center;
    gap: ${size === statusTagSizes.MD ? "0.625rem" : "0.25rem"};
    font-size: ${size === statusTagSizes.MD ? typeScaleSizes.sm : typeScaleSizes.xs};
    font-weight: ${size === statusTagSizes.SM ? "700" : "400"};
    border-radius: 5px;
    line-height: 1;

    /* Define Colors Schemes*/
    &.statusTag--neutral {
      color: ${colors.black};
      background-color: ${statusTag.neutral};
    }

    &.statusTag--positive {
      color: ${colors.black};
      background-color: ${statusTag.positive};
    }

    &.statusTag--negative {
      color: ${colors.black};
      background-color: ${statusTag.negative};
    }

    &.statusTag--inactive {
      color: ${colors.black};
      background-color: ${statusTag.inactive};
    }

    &.statusTag--warning {
      color: ${colors.black};
      background-color: ${statusTag.warning};
    }

    &.statusTag--promo {
      color: ${colors.white};
      background-color: ${statusTag.promo};
    }

    &.statusTag--pale {
      color: ${colors.white};
      background-color: ${statusTag.pale};
    }

    &.statusTag--grey {
      color: ${colors.black};
      background-color: ${statusTag.grey};
    }

    &.statusTag--red {
      color: ${colors.white};
      background-color: ${statusTag.red};
    }

    .statusTag__icon {
      display: inline-flex;

      svg {
        height: 1rem;
        color: inherit;
        fill: inherit;
      }
    }
  `;
};
