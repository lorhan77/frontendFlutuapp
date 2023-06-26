import React, { useEffect, useState} from 'react';
//import axios from 'axios';
import { Container, Row, Form, Button } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho';
import { useParams, useNavigate } from "react-router-dom";
import funcionariosService from '../services/funcionariosService';

function Funcionarios() {
  
  const { id } = useParams();
  const [funcionario, setFormData] = useState({});
  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {
        const response = await funcionariosService.getOneFuncionarios(id);
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
              await  funcionariosService.createFuncionarios(funcionario);
              alert('incluido com sucesso!'); 
          }
          else {
              await funcionariosService.updateFuncionarios(id, funcionario);
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
      setFormData({ ...funcionario, [name]: value });
    };
  
  return (    

    <Container  fluid>
      <Row>
        <Cabecalho />
      </Row>
   
      <Form onSubmit={handleSubmit}>
       <div className='todo'>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label> CPF: <Form.Control  type="text" name="cpf" value={funcionario.cpf} onChange={handleChange} /> </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Nome: <Form.Control type="text" name="nome" value={funcionario.nome} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>CEP:  <Form.Control type="text" name="cep" value={funcionario.cep} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Email: <Form.Control type="text" name="email" value={funcionario.email} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Fone: <Form.Control type="text" name="fone" value={funcionario.descricao} onChange={handleChange} /></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Função: <Form.Control type="text" name="funcao" value={funcionario.funcao} onChange={handleChange} /></Form.Label>
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

export default Funcionarios;