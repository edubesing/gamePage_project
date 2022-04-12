import React from 'react';
import { Form, Col, Row } from 'react-bootstrap'

import SideBar from '../../components/sidebar/sidebar.js';
import AlterarSenhaModal from '../../components/AlterarSenha/alterar-senha';
import AlterarEmailModal from '../../components/AlterarEmail/alterar-email';

import './minha-conta.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function MinhaConta() {
    return(
        <div className="d-flex justify-content-center meus-jogos-body">
            <SideBar/>
            <div className="container-jogos">
                <h1>Minha Conta</h1>
                <Row>
                    <Col md={6}>                    
                    <Form>
                        <div className='formConta'>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type='text'
                            className='form-control'
                            placeholder="Disabled input" disabled>
                        </Form.Control>

                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type='email' 
                            className='form-control'
                            placeholder="Disabled input" disabled>
                        </Form.Control>
                        </div>

                        <AlterarEmailModal/>
                        <br/>
                        <AlterarSenhaModal/>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default MinhaConta;