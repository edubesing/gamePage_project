import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import "./alterar-email.css";

function AlterarEmailModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="edEmail">
        Editar Email
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header className="modal-title">
          <Modal.Title>Editar Email</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-modal-body">

          <Form>
            <Form.Group className="mb-3 px-4" controlId="nome">
              <Form.Label className="text-label">Nova Email</Form.Label>
              <Form.Control type="text" className="input-style" />
            </Form.Group>

            <div className="buttons mb-3">
              <Button className="cancel-button button-style" onClick={handleClose}>
                Cancelar
              </Button>
              <Button className="add-button button-style" type="submit">
                Confirmar
              </Button>
            </div>
          </Form>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default AlterarEmailModal;
