import React, { ReactNode } from "react";
import { Modal, ModalBody } from "react-bootstrap";
interface Props {
  className?: string;
  show: boolean;
  onHide: () => void;
  children: ReactNode;
  title: string;
}

export const PopupModal: React.FC<Props> = ({
  className,
  show,
  onHide,
  children,
  title,
}) => {
  return (
    <Modal
      className={`common_modal ${className ? className : ""}`}
      show={show}
      centered
    >
      <Modal.Header closeButton onHide={onHide}>
        <h2>{title}</h2>
      </Modal.Header>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};
