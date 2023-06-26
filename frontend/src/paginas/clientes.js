import React, { useEffect, useState} from 'react';
//import axios from 'axios';
import { Container, Row, Form, Button } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho';
import { useParams, useNavigate } from "react-router-dom";
import clientesService from '../services/clientesService';


function Clientes() {
  
  const { id } = useParams();
  const [cliente, setFormData] = useState({});
  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {
        const response = await clientesService.getOneClientes(id);
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
        
        if (event.nativeEvent.submitter.name === "salvar") {
          alert(id);
          if (id === ':id') {
            alert(id); 
              await  clientesService.createClientes(cliente);
              alert('incluido com sucesso!'); 
          }
          else {
              await clientesService.updateClientes(id, cliente);
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
      setFormData({ ...cliente, [name]: value });
    };
  
  return (    

    <Container  fluid>
      <Row>
        <Cabecalho />
      </Row>
   
      <Form onSubmit={handleSubmit}>
       <div className='todo'>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label> CPF: <Form.Control  type="text" name="cpf" value={cliente.cpf} onChange={handleChange} /> </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Nome: <Form.Control type="text" name="nome" value={cliente.nome} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>CEP:  <Form.Control type="text" name="cep" value={cliente.cep} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Email: <Form.Control type="text" name="email" value={cliente.email} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Fone: <Form.Control type="text" name="fone" value={cliente.descricao} onChange={handleChange} /></Form.Label>
      </Form.Group>
      
      <Button size="lg" type="submit" name='salvar'>
       Inserir
      </Button>
      <Button  size="lg" variant="primary" type="submit" name="cancelar">
            Cancelar
        </Button>
      </div>
    </Form>
    
            
    </Container>
  );
}

export default Clientes;