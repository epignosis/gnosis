import React, { FC, ReactElement, cloneElement, Children } from "react";
import { ClassNames } from "@emotion/react";
import ReactModal, { Props } from "react-modal";
import Heading from "../Heading/Heading";
import { CloseModalSVG } from "../../icons/";
import { modalContent, modalFooter, modalHeader, portalStyles } from "./styles";
import { FCWithChildren } from "types/common";

export type HeaderProps = React.HTMLAttributes<HTMLElement> & {
  onClose?: () => void;
};

const Header: FC<HeaderProps> = ({ children, onClose, ...rest }) => {
  const title = typeof children === "string" ? <Heading size="md">{children}</Heading> : children;
  return (
    <header css={modalHeader} data-testid="modal-header" {...rest}>
      <div>{title}</div>
      {onClose && (
        <a
          role="button"
          className="close-btn"
          aria-label="Close button"
          data-testid="header-close-button"
          onClick={onClose}
        >
          <CloseModalSVG height={32} />
        </a>
      )}
    </header>
  );
};

type BodyProps = React.HTMLAttributes<HTMLElement>;

const Body: FC<BodyProps> = ({ children, ...rest }) => {
  return (
    <article css={modalContent} {...rest}>
      {children}
    </article>
  );
};

type FooterProps = React.HTMLAttributes<HTMLElement>;

const Footer: FC<FooterProps> = ({ children, ...rest }) => {
  return (
    <footer css={modalFooter} data-testid="modal-footer" {...rest}>
      {children}
    </footer>
  );
};

type ModalCompoundProps = {
  Header: FC<Omit<HeaderProps, "onClose">>;
  Body: FC<BodyProps>;
  Footer: FC<FooterProps>;
};

export type Size = "sm" | "md" | "lg" | "fullscreen";

//opacity is set 0.7 default

export type ReactModalProps = Pick<Props, "isOpen" | "onAfterOpen"> & {
  onClose?: () => void;
  size?: Size;
  rootElementSelector?: string;
  closeOnOutsideClick?: boolean;
  style?: ReactModal.Styles;
};

const Modal: FCWithChildren<ReactModalProps> & ModalCompoundProps = ({
  children,
  isOpen,
  onClose,
  size = "sm",
  rootElementSelector = "#app",
  closeOnOutsideClick = true,
  style,
  onAfterOpen,
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
          onAfterOpen={onAfterOpen}
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
