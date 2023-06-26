import React from 'react';
import { Container } from 'react-bootstrap';
//import {Link} from 'react-router-dom';
//import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';



function Rodape() {
  
  return (
    <Container fluid>
    <Navbar   bg="warning" variant="dark" className="justify-content-between" > 
    <Nav   defaultActiveKey="/home" as="ul">
          <Navbar.Brand   href="https://pt-br.facebook.com/">
            <img
              src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/%C3%8Dcone-Facebook-PNG.png"
              width="20"
              height="20"
              className="d-inline-block align-bot"
              alt="React fb logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="https://twitter.com/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111819.png"
              width="20"
              height="20"
              className="d-inline-block align-bot"
              alt="React tt logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="https://www.instagram.com/">
            <img
              src="https://www.sendible.com/hs-fs/hubfs/Imported_Blog_Media/sm-icons-instagram-glyph-logo.png?width=120&height=120&name=sm-icons-instagram-glyph-logo.png"
              width="20"
              height="20"
              className="d-inline-block align-bot"
              alt="React insta logo"
            />
          </Navbar.Brand>
    </Nav>
    <Nav   defaultActiveKey="/home" as="ul">
    <Navbar.Brand   href="/reservas/inserir">
          <Button bg="dark" variant="outline-light" size="lg">
          Reserve a sua!
        </Button>
      </Navbar.Brand>
    </Nav>
    <Nav>
      <Navbar.Brand href="https://web.whatsapp.com/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536445.png"
              width="40"
              height="40"
              className="d-inline-block align-bot"
              alt=" wpp logo"
            />
          </Navbar.Brand>
    </Nav>
    </Navbar>

    </Container>
         
  );
}

export default Rodape;