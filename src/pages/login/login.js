import React, { useState } from "react";
import { Button, Form, Container, Col, Row, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import api from '../../services/api.js'
import { useAppContext } from "../../lib/contextLib";
import 'bootstrap/dist/css/bootstrap.min.css'
import './login.css'

function Login() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const { userHasAuthenticated } = useAppContext();
  
    function validateForm() {
      return email.length > 0 && senha.length > 0;
    }
  
    async function handleSubmit(event) {
        event.preventDefault();
        const obj = {
            email, 
            senha
        }
        try {
            await fazerLogin(obj);
        } catch (e) {
            alert(e.message);
        }
      }
    
    function fazerLogin(body){
        console.log("tentando um login...");
        api
          .post("/usuarios/login", body)
          .then(res => {
            if (res.status === 200) {
                console.log("login feito com sucesso");
                userHasAuthenticated(true);
                setShow(true);
            }
          })
          .catch(err => {
              console.log("Erro do formulário de login: ", err);
              alert("Erro no Login! Usuário ou senha incorretos");
          });
      }


    return (
        <div className='d-flex align-items-center justify-content-center login-page'>
            <Container>
                <Row className='d-flex align-items-center justify-content-center'>
                    <Col sm={12} lg={8}>
                        <Form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type='email' 
                                    className='form-control'
                                    autoComplete='username'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></Form.Control>

                                <Form.Label>Senha</Form.Label>
                                <Form.Control 
                                    type='password' 
                                    className='form-control'
                                    autoComplete='current-password'
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                ></Form.Control>
                            </div>
                            <Button 
                                type="submit"
                                className='login-submit-button'
                                disabled={!validateForm()}
                            >Entrar</Button>
                            <br/>
                            <Form.Text className='texto-cadastro'>Novo usuário? <Link to='/cadastro'>Cadastre-se aqui</Link></Form.Text>
                        </Form>
                    </Col>
                    <Modal
                        show={show}
                        backdrop="static"
                        aria-labelledby="contained-modal-title-vcenter"
                        keyboard={false}
                        centered
                    >
                        <Modal.Body className="bg-modal-body">
                            <p className="texto-sucesso">Login feito com sucesso!</p>
                            <div className="d-flex align-items-center justify-content-center">
                                <Link to='/meus-jogos'>
                                    <Button className="entrar-button">
                                        Ok!
                                    </Button>
                                </Link>
                            </div>
                        </Modal.Body>
                    </Modal>
                </Row>
            </Container>
        </div>
    );
}
export default Login;