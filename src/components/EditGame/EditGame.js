import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import "./EditGame.css";

function EditGameModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        <img src="./assets/edit.png" alt="editar um jogo" />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header className="modal-title">
          <Modal.Title>Editar Jogo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-modal-body">

          <Form>
            <Form.Group className="mb-3 px-4" controlId="nome">
              <Form.Label className="text-label">Título</Form.Label>
              <Form.Control type="text" className="input-style" />
            </Form.Group>

            <Form.Group className="mb-3 px-4" controlId="preco">
              <Form.Label className="text-label">Preço</Form.Label>
              <Form.Control type="text" className="input-style" />
            </Form.Group>

            <Form.Group className="mb-5 px-4" controlId="genero">
              <Form.Label className="text-label">Gênero</Form.Label>
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

export default EditGameModal;
