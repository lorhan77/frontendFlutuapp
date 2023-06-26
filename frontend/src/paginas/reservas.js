import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { Container, Row, Image } from 'react-bootstrap';
import { useParams, useNavigate, Link} from "react-router-dom";
import Cabecalho from '../componentes/cabecalho';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import Dropdown from 'react-bootstrap/Dropdown';
import reservasService from '../services/reservasService';
import flutuantesService from '../services/flutuantesService';
import clientesService from '../services/clientesService';

function Reservas() {
  
  const {   id } = useParams();
  const {   idCliente } = useParams();

  const [ flutuantes, setDropData] = useState([]);
  
  const history = useNavigate();
  
  const [reservaData, setFormData] = useState([]);

  const [selectedValue, setSelectedValue] = useState('');

  const [clienteValue, setClienteValue] = useState('');
  
  useEffect(() => {

    
      async function fetchFormData () {
      try {

        const responseFlutuante = await flutuantesService.getFlutuantes();
        setDropData(responseFlutuante.data);

        const response = await reservasService.getOneReservas(id);
        setFormData(response.data);

        const responseCliente = await clientesService.getOneClientes(idCliente);
        setClienteValue(responseCliente.data);

      } catch (error) {
        console.error(error);
      }
  
      };
      fetchFormData();
    },[id, idCliente]); 

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        
        alert(id); 
        alert(reservaData.flutuantes); 
        reservaData.funcionario='Web - Internet';
        reservaData.cliente='Web - Internet';
        reservaData.status='N';
        reservaData.valortotal='999999';
        if (event.nativeEvent.submitter.name === "salvar") {
          if (id === 'inserir') {
           
              await  reservasService.createReservas(reservaData);
              alert('incluido com sucesso!'); 
          }
          else {
              await reservasService.updateReservas(id, reservaData);
              alert('alterado com sucesso!');
          }
        }else if(event.nativeEvent.submitter.name === "cancelar"){
          reservaData.status = 'C'; //trocar a reserva pro status cancelado
          await reservasService.updateReservas(id, reservaData);
          alert('cancelado com sucesso!');
        }
      } catch (error) {
        console.error(error);
      }
      history(-1);
    }

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...reservaData, [name]: value });
     
    };

    const handleSelectChange = (event) => {
      const value = event.target.value;    
      setSelectedValue(value);
      reservaData.flutuantes = value
    };

    const clienteChange = (event) => {
      const { name, value } = event.target;   
      setClienteValue({ ...clienteValue, [name]: value });
    };

    
  return (    

    <Container  fluid>
      <Row>
        <Cabecalho />
      </Row>
     
      <Form className='form-reservas' onSubmit={handleSubmit}>

      <Form.Group>
        <Form.Label  className='cpfForm'> CPF: <Form.Control type="text" name="cpf" value={clienteValue.cpf} onChange={clienteChange}/></Form.Label>
        <Form.Label> Nome: <Form.Control type="text" name="nome" value={clienteValue.nome} onChange={clienteChange} /> </Form.Label> 
        <Link to="/clientes/:id">
          <Button>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png"
              alt="Incluir"
              className="rounded-circle"
              width="30"
              height="30"
            />
          </Button>
          </Link>  
      </Form.Group>
            <Form.Label>Selecione um flutuante</Form.Label>
            <Form.Control as="select" name='flutuante' value={selectedValue} onChange={handleSelectChange}>
              {flutuantes.map(item => (
                <option key={item._id}  value={item._id} >
                  {item.flutuante}
                </option>
              ))}
            </Form.Control>
   
      <Form.Group >
          <Form.Label>Valor select</Form.Label>
          <Form.Control  name='sala' type="text" value={selectedValue} readOnly />
      </Form.Group>
      <Form.Label> Data da reserva: </Form.Label>
        <Form.Control type="date" name="data" value={reservaData.data} onChange={handleChange} />
      <Form.Group >
        <Form.Label> Hora de Início: </Form.Label>
         <Form.Control type="number" name="inicio" value={reservaData.inicio} onChange={handleChange} />
      </Form.Group>
      <Form.Group >
        <Form.Label> Número:</Form.Label>  <Form.Control type="number" name="numero" value={reservaData.numero} onChange={handleChange} />
      </Form.Group>
      <Form.Group >
        <Form.Label> Valor: </Form.Label>  <Form.Control type="number" name="valor" value={reservaData.valor} onChange={handleChange} />
      </Form.Group>
      <Form.Group >
        <Form.Label> Hora Fim:</Form.Label> 
        <Form.Control type="number" name="fim" value={reservaData.fim} onChange={handleChange} />
      </Form.Group>
      <Form.Group >
        <Form.Label> Observacao: </Form.Label> 
        <Form.Control type="text" name="observacao" value={reservaData.observacao} onChange={handleChange} />
      </Form.Group>
  
      <Button size="lg" type="submit" name='salvar'>
            Reservar
      </Button>
      <Button  size="lg" variant="primary" type="submit" name="cancelar">
            Cancelar
      </Button>
      <Button  size="lg"  variant="primary" type="submit" name="cancelar">
            Cancelar reserva
      </Button>
      
    </Form>  
    </Container>
  );
}

export default Reservas;