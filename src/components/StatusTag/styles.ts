import { css, Theme } from "@emotion/react";
import { StatusTagSizes } from "./StatusTag";
import { colors } from "@theme/default/colors";

export const statusTagStyles = (
  {
    statusTag,
    typeScaleSizes,
  }: { statusTag: Theme["statusTag"]; typeScaleSizes: Theme["typeScaleSizes"] },
  size: StatusTagSizes,
) => {
  return css`
    display: inline-flex;
    height: ${size === "md" ? "2rem" : "1.25rem"};
    padding: ${size === "md" ? "0.5rem" : "0.125rem 0.25rem"};
    align-items: center;
    gap: ${size === "md" ? "0.625rem" : "0.25rem"};
    font-size: ${size === "md" ? typeScaleSizes.sm : typeScaleSizes.xs};
    font-weight: ${size === "sm" ? "700" : "400"};
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
