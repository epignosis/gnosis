import React, { FC } from "react";
import { SerializedStyles } from "@emotion/react";
import { WarningSVG, DangerSVG, InfoSVG, SuccessSVG, CloseCircledSVG } from "../../icons/";
import { container } from "./styles";
import { IconType } from "types/common";

export type AlertType = "info" | "danger" | "success" | "warning";

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
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

const Alert: FC<AlertProps> = ({ type, children, onClose, icon: Icon, ...rest }) => {
  return (
    <div css={(theme): SerializedStyles => container(theme, { type })} {...rest}>
      {Icon ? (
        <Icon height={56} className="icon" data-testid="icon" />
      ) : (
        <div className="icon" data-testid="icon">
          {ICONS[type]}
        </div>
      )}
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
