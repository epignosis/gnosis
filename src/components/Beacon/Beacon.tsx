import React, { PropsWithChildren } from "react";
import { SerializedStyles } from "@emotion/react";
import { beaconContainer } from "./styles";

type Placement = "left" | "right";

export type BeaconProps = PropsWithChildren<{
  placement?: Placement;
  /** Optional fine-tuning if you need to nudge the beacon in X-axis (rem units). */
  offsetX?: number;
  /** Optional fine-tuning if you need to nudge the beacon in Y-axis (rem units). */
  offsetY?: number;
  isBeaconVisible?: boolean;
}>;

export const Beacon: React.FC<BeaconProps> = ({
  children,
  placement = "right",
  offsetX = 0,
  offsetY = 0,
  isBeaconVisible = true,
}) => {
  return (
    <div
      css={(theme): SerializedStyles =>
        beaconContainer(theme, placement, `${offsetX}rem`, `${offsetY}rem`)
      }
    >
      <span className="beacon-content">
        {children}
        {isBeaconVisible && <span className="beacon" />}
      </span>
    </div>
  );
};
