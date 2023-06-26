import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { Container, Row  } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import Cabecalho from '../componentes/cabecalho';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import flutuantesService from '../services/flutuantesService';

function Flutuantes() {
  
  const { id } = useParams();
  const [flutuante, setFormData] = useState({});
  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {
        const response = await flutuantesService.getOneFlutuantes(id);
        setFormData(response.data);  
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchFormData();
    },[id]); 

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        
        //const id = event.target._id.value;
        if (event.nativeEvent.submitter.name === "salvar") {
          alert(id);
          if (id === ':id') {
            alert(id); 
              await  flutuantesService.createFlututantes(flutuante);
              alert('incluido com sucesso!'); 
          }
          else {
              await flutuantesService.updateFlutuantes(id, flutuante);
              alert('alterado com sucesso!');
          }
        }
      } catch (error) {
        console.error(error);
      }
      history(-1);
    }

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...flutuante, [name]: value });
    };
  
  
  return (    

    <Container  fluid>
      <Row>
        <Cabecalho />
      </Row>
   
      <Form onSubmit={handleSubmit}>
       <div className='todo'>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label> Número: <Form.Control  type="text" name="numero" value={flutuante.numero} onChange={handleChange} /> </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Tipo: <Form.Control type="text" name="tipo" value={flutuante.tipo} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Capacidade:  <Form.Control type="text" name="capacidade" value={flutuante.capacidade} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Valor: <Form.Control type="text" name="valor" value={flutuante.valor} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Descrição: <Form.Control type="text" name="descricao" value={flutuante.descricao} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Imagem: <Form.Control type="text" name="image" value={flutuante.image} onChange={handleChange} /></Form.Label>
      </Form.Group>
      
      <Button size="lg" type="submit" name='salvar'>
       Reservar agora
      </Button>
      <Button  size="lg" variant="primary" type="submit" name="cancelar">
            Cancelar
        </Button>
      </div>
      <img className="tamanho2" src={flutuante.image} alt="imagem banco"></img>
    </Form>
    
    </Container>
  );
}

export default Flutuantes;