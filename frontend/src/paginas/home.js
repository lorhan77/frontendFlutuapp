import React from 'react';
import { Container } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';
import Carrosel from './carrossel';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles.css'




function Home() {
  return (

    <Container fluid>
      <Cabecalho/>
      <Carrosel/>
      <Rodape/>
    </Container>
 
      )
      };

export default Home;

