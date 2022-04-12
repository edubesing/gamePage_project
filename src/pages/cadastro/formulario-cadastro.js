import React from "react";
import { Button, Form, Container, Row, Col, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import QualidadeSenha from "./qualidade-senha.js";

import 'bootstrap/dist/css/bootstrap.min.css'
import './cadastro.css'

const FormularioCadastro = ({
    onSubmit,
    onChange,
    errors,
    user,
    score,
    btnTxt,
    btnImg,
    type,
    pwMask,
    onPwChange,
    show
}) => {

  return (
    <div>
        <Row className='d-flex align-items-center cadastro-back-button'>
            <Container>
                <Link to='/login'><img src="./assets/arrow_back_white.png" alt="voltar para a página de login"/></Link>
            </Container>
        </Row>
        <Row className='d-flex align-items-center justify-content-center cadastro-page'>
            <Container>
                <Form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <Row>
                            <Col sm={12} lg={6}>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    className='form-control'
                                    name="nome"
                                    value={user.nome}
                                    onChange={onChange}
                                    autoComplete='name'
                                />
                                <p className="error-message">{errors.username}</p>
                            </Col>
                            <Col sm={12} lg={6}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    className='form-control'
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={onChange}
                                    autoComplete='email'
                                />
                                <p className="error-message">{errors.email}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} lg={6}>
                                <Form.Label>Senha</Form.Label>
                                <div> 
                                    <Form.Control
                                        className='form-control-senha'
                                        type={type}
                                        name="senha"
                                        value={user.senha}
                                        onChange={onPwChange}
                                        autoComplete='new-password'
                                    />
                                    <p className="error-message">{errors.password}</p>
                                </div>
                        
                                <div className="pwStrRow">
                                    {score >= 1 && (
                                        <div>
                                            <QualidadeSenha score={score}/>
                                            <Button 
                                                className='mostrar-senha-button' 
                                                label={btnTxt} 
                                                onClick={pwMask}
                                                ><img src={btnImg} alt={btnTxt}></img>
                                            </Button>
                                        </div>
                                        )} 
                                </div>
                            </Col>

                            <Col sm={12} lg={6}>
                                <Form.Label>Confirmar Senha</Form.Label>
                                <Form.Control
                                    className='form-control'
                                    type={type}
                                    name="pwconfirm"
                                    value={user.pwconfirm}
                                    onChange={onChange}
                                    autoComplete='new-password'
                                />
                                <p className="error-message">{errors.pwconfirm}</p>
                            </Col>
                        </Row>
                    </div>
                    <Button
                        className='submit-button'
                        type="submit"
                        value="Submit"
                    >Cadastrar-se</Button>

                    <Modal
                        show={show}
                        backdrop="static"
                        aria-labelledby="contained-modal-title-vcenter"
                        keyboard={false}
                        centered
                    >
                        <Modal.Body className="bg-modal-body">
                            <p className="texto-sucesso">Cadastro feito com sucesso!</p>
                            <div className="d-flex align-items-center justify-content-center">
                                <Link to='/login'>
                                    <Button className="voltar-login-button">
                                        Ir ao Login
                                    </Button>
                                </Link>
                            </div>
                        </Modal.Body>
                    </Modal>
                </Form>
            </Container>
        </Row>
    </div>
    
  );
};

export default FormularioCadastro;
