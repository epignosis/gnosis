import React, { FC } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toaster } from "./styles";
import { CloseCircledSVG } from "@icons/core";

const Toaster: FC = () => {
  return (
    <ToastContainer
      position="top-right"
      css={toaster}
      closeButton={<CloseCircledSVG height={32} className="close-btn" />}
    />
  );
};

export default Toaster;
