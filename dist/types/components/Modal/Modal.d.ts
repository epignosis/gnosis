import { CSSProperties, FC } from "react";
import { Props } from "react-modal";
export declare type HeaderProps = {
    onClose?: () => void;
};
declare type BodyProps = {
    style?: CSSProperties;
};
declare type FooterProps = {
    style?: CSSProperties;
};
declare type ModalCompoundProps = {
    Header: FC<Omit<HeaderProps, "onClose">>;
    Body: FC<BodyProps>;
    Footer: FC<FooterProps>;
};
export declare type Size = "md" | "lg" | "fullscreen";
export declare type ReactModalProps = Pick<Props, "isOpen"> & {
    onClose?: () => void;
    size?: Size;
    rootElementSelector?: string;
};
declare const Modal: FC<ReactModalProps> & ModalCompoundProps;
export default Modal;
