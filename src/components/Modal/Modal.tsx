import React, { CSSProperties, FC, ReactElement, cloneElement, Children } from "react";
import { ClassNames } from "@emotion/react";
import ReactModal, { Props } from "react-modal";
import Heading from "../Heading/Heading";
import { CloseCircledSVG } from "../../icons/";
import { modalContent, modalFooter, modalHeader, portalStyles } from "./styles";

export type HeaderProps = {
  style?: CSSProperties;
  onClose?: () => void;
};

const Header: FC<HeaderProps> = ({ children, style, onClose }) => {
  const title = typeof children === "string" ? <Heading size="md">{children}</Heading> : children;
  return (
    <header style={style} css={modalHeader} data-testid="modal-header">
      <div>{title}</div>
      {onClose && (
        <a
          role="button"
          className="close-btn"
          aria-label="Close button"
          data-testid="header-close-button"
          onClick={onClose}
        >
          <CloseCircledSVG height={28} />
        </a>
      )}
    </header>
  );
};

type BodyProps = {
  style?: CSSProperties;
};

const Body: FC<BodyProps> = ({ children, style }) => {
  return (
    <article style={style} css={modalContent}>
      {children}
    </article>
  );
};

type FooterProps = {
  style?: CSSProperties;
};

const Footer: FC<FooterProps> = ({ children, style }) => {
  return (
    <footer style={style} css={modalFooter} data-testid="modal-footer">
      {children}
    </footer>
  );
};

type ModalCompoundProps = {
  Header: FC<Omit<HeaderProps, "onClose">>;
  Body: FC<BodyProps>;
  Footer: FC<FooterProps>;
};

export type Size = "md" | "lg" | "fullscreen";

export type ReactModalProps = Pick<Props, "isOpen"> & {
  onClose?: () => void;
  size?: Size;
  rootElementSelector?: string;
  closeOnOutsideClick?: boolean;
  style?: ReactModal.Styles;
};

const Modal: FC<ReactModalProps> & ModalCompoundProps = ({
  children,
  isOpen,
  onClose,
  size = "md",
  rootElementSelector = "#app",
  closeOnOutsideClick = true,
  style,
}) => {
  const rootElement = document.querySelector(rootElementSelector) as HTMLElement;
  const clonedChildren = Children.map(children, (child) =>
    cloneElement(child as ReactElement, {
      onClose,
    }),
  );

  return (
    <ClassNames>
      {({ css }): JSX.Element => (
        <ReactModal
          isOpen={isOpen}
          appElement={rootElement}
          onRequestClose={onClose}
          contentLabel="modal"
          overlayClassName={{
            base: "overlay-base",
            afterOpen: "overlay-after",
            beforeClose: "overlay-before",
          }}
          className={{
            base: "content-base",
            afterOpen: "content-after",
            beforeClose: "content-before",
          }}
          closeTimeoutMS={200}
          portalClassName={css(portalStyles(size))}
          ariaHideApp={false}
          shouldCloseOnOverlayClick={closeOnOutsideClick}
          style={style}
        >
          {clonedChildren}
        </ReactModal>
      )}
    </ClassNames>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
