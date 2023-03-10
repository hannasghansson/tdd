import React from "react";
import ReactDom from "react-dom";

const PortalModal = ({ title, message, buttonText, isOpen, onClose }) => {
  if (!isOpen) return null;
  return ReactDom.createPortal(
    <div
      className="modal show"
      tabIndex="-1"
      role="dialog"
      style={{
        display: "block",
        background: "rgba(0, 0, 0, 0.5)",
        color: "#010307",
      }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content p-5">
          <h5 className="mb-3">{title}</h5>

          <p className="mb-4">{message}</p>

          <button
            type="button"
            className="close btn btn-dark py-2"
            onClick={onClose}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
export default PortalModal;
