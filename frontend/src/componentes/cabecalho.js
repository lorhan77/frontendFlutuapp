import React from 'react';
//import { Container, Anchor } from 'react-bootstrap';
//import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import logo from './logo.png'

function Cabecalho() {  
  return (
<Container fluid>
    <Navbar   bg="warning" variant="dark" className="justify-content-center" > 
    <Nav >
      <Navbar.Brand >
            <img
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-bot"
              alt="logo"
            />
          </Navbar.Brand>
    </Nav>
    <Nav  className='kkk' defaultActiveKey="/home" as="ul">
          <Navbar.Brand   href="/">
           HOME
          </Navbar.Brand>
    </Nav>
    <Nav   defaultActiveKey="/home" as="ul">
          <Navbar.Brand   href="/contatos">
           Contatos
          </Navbar.Brand>
    </Nav>
    <Nav   defaultActiveKey="/home" as="ul">
          <Navbar.Brand   href="/index">
           Intranet
          </Navbar.Brand>
    </Nav>
  
    </Navbar>

    </Container>
  );
}

export default Cabecalho;