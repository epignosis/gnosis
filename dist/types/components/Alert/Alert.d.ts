import { FC } from "react";
import { IconType } from "types/common";
export declare type AlertType = "info" | "danger" | "success" | "warning";
export declare type AlertProps = {
    type: AlertType;
    onClose?: () => void;
    icon?: IconType;
};
declare const Alert: FC<AlertProps>;
export default Alert;
