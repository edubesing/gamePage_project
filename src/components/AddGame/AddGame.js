import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import "./AddGame.css";

function AddGameModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [genero, setGenero] = useState("");


  return (
    <div>
      <Button className="add-button" onClick={handleShow}
        >Adicionar um Jogo<img className="add-image" src="./assets/add_purple.png" alt="adicionar um jogo"/>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header className="modal-title">
          <Modal.Title>Adicionar Jogo</Modal.Title>
        </Modal.Header>

        <Modal.Body className="bg-modal-body">
          <Form>
            <Form.Group className="mb-3 px-4" controlId="nome">
              <Form.Label className="text-label">Nome</Form.Label>
              <Form.Control 
                type="text" 
                className="input-style" 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 px-4" controlId="preco">
              <Form.Label className="text-label">Preço</Form.Label>
              <Form.Control
                type="number" 
                className="input-style" 
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-5 px-4" controlId="genero">
              <Form.Label className="text-label">Gênero</Form.Label>
              <Form.Control 
                type="text" 
                className="input-style"
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
              />
            </Form.Group>

            <div className="buttons mb-3">
              <Button className="cancel-button button-style" onClick={handleClose}>Cancelar</Button>
              <Button className="add-button button-style" type="submit">Adicionar</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddGameModal;
