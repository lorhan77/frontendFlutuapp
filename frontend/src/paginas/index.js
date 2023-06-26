import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logoSala from './logoSala.png';
import logoFuncionario from './logoFuncionario.png';
import logoCliente from './logoCliente.png';
import logoUsuario from './logoUsuario.png';



function Index() {
  return (

    <Container fluid>
      <Cabecalho/>
      <Navbar   bg="warning" variant="dark" className="intranet" > 
    <Nav   defaultActiveKey="/home" as="ul">
        <Row >
            <Col>FLUTUANTES</Col>
        <Navbar.Brand   href="/flutuantes">
            <img
              src={logoSala}
              width="150"
              height="150"
              className="d-inline-block align-bot"
              alt="Sala logo"
            />
          </Navbar.Brand>
          <Col>FUNCIONÁRIOS</Col>   
          <Navbar.Brand   href="/funcionarios">
            <img
              src={logoFuncionario}
              width="150"
              height="150"
              className="d-inline-block align-bot"
              alt="Sala logo"
            />
          </Navbar.Brand>
          </Row>
          <Row>
          <Col>CLIENTES</Col>
          <Navbar.Brand   href="/clientes">
            <img
              src={logoCliente}
              width="150"
              height="150"
              className="d-inline-block align-bot"
              alt="Sala logo"
            />
          </Navbar.Brand>
          <Col>USUÁRIOS</Col>
          <Navbar.Brand   href="/listausuario">
            <img
              src={logoUsuario}
              width="150"
              height="150"
              className="d-inline-block align-bot"
              alt="Sala logo"
            />
          </Navbar.Brand>
          </Row>
    </Nav>
    </Navbar>
    </Container>
 
      )
      };

export default Index;