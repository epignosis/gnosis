import React, { FC } from "react";
import { SerializedStyles } from "@emotion/react";
import { container } from "./styles";
import { IconType } from "types/common";
import { WarningSVG, DangerSVG, InfoSVG, SuccessSVG, CloseCircledSVG } from "@icons/core";

export type AlertType = "info" | "danger" | "success" | "warning";

export type AlertProps = {
  type: AlertType;
  onClose?: () => void;
  icon?: IconType;
};

const ICONS = {
  info: <InfoSVG height={56} />,
  danger: <DangerSVG height={56} />,
  success: <SuccessSVG height={56} />,
  warning: <WarningSVG height={56} />,
};

const Alert: FC<AlertProps> = ({ type, children, onClose, icon: Icon }) => {
  return (
    <div css={(theme): SerializedStyles => container(theme, { type })}>
      {Icon ? <Icon height={56} className="icon" /> : <div className="icon">{ICONS[type]}</div>}

      <article>{children}</article>
      {Boolean(onClose) && (
        <button aria-label="Close alert" onClick={onClose} className="close-btn">
          <CloseCircledSVG height={32} />
        </button>
      )}
    </div>
  );
};

export default Alert;
