import React from "react";
import "./Modal.css";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}
const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div
        className="custom-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="custom-modal-header">
          <h5 className="custom-modal-title">{title}</h5>
        </div>
        <div className="custom-modal-body">{children}</div>
        <div className="custom-modal-footer"></div>
      </div>
    </div>
  );
};

export default Modal;
