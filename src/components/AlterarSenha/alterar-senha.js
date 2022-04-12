import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import "./alterar-senha.css";

function AlterarSenhaModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="trocarSenha">
        Trocar Senha
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header className="modal-title">
          <Modal.Title>Trocar Senha</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-modal-body">

          <Form>
            <Form.Group className="mb-3 px-4" controlId="nome">
              <Form.Label className="text-label">Senha Atual</Form.Label>
              <Form.Control type="text" className="input-style" />
            </Form.Group>

            <Form.Group className="mb-3 px-4" controlId="preco">
              <Form.Label className="text-label">Nova Senha</Form.Label>
              <Form.Control type="text" className="input-style" />
            </Form.Group>

            <Form.Group className="mb-5 px-4" controlId="genero">
              <Form.Label className="text-label">Confirmar Senha</Form.Label>
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

export default AlterarSenhaModal;
