import React,{ useEffect, useState} from 'react';
//import axios from 'axios';
import { Container, Row, Col, Form, FormControl, Button, Image} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Cabecalho from '../componentes/cabecalho';
//import Rodape from '../componentes/rodape';
import './styles.css'
import clientesService from '../services/clientesService';

function ListaClientes() {
  
  const [tableData, setTableData] = useState([]);
  
  
  useEffect(() => {
      async function fetchTableData () {
      
      try {
        const response = await clientesService.getClientes();
        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchTableData();
    },[]); 

    async function handleDelete(id) {
      try {
        const response = await clientesService.deleteClientes(id);
        setTableData(response.data);
            alert(id);
      } catch (error) {
        console.error(error);
      }      
    }
  
  return (    

    <Container fluid>
      <Row>
        <Col xs={12}>
        <Cabecalho />
        </Col>
      </Row>
        <Form  className="form-pesquisa">
                <FormControl
                type="text"
                placeholder="Pesquisar"
                name='search'
                />
                <Button variant="outline-success" type="submit">Pesquisar</Button>
                <Row className='headerSalas'>CLIENTES</Row>
                    <table className='salasTab'>
                        <thead>
                            <tr>
                                <th>CPF</th>
                                <th>Nome</th>
                                <th>CEP</th>
                                <th>Email</th>
                                <th>Fone</th>
                            </tr>
                         
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => {
                                return (
                            <tr key={index} data-toogle="tooltip" title={row.cpf}>
                                <td>{row.cpf}</td>
                                <td>{row.nome}</td>
                                <td>{row.cep}</td>
                                <td>{row.email}</td>
                                <td>{row.fone}</td>
                                <td>
                                  <Link to={`/clientes/${row._id}`} >
                                    <Image
                                          src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
                                          alt="editar"
                                          className="rounded-circle"
                                          width="30"
                                          height="30"
                                    />
                                  </Link>
                                </td>
                                <td>
                                    <Image 
                                      src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                                      alt="apagar"
                                      className="rounded-circle"
                                      width="30"
                                      height="30"
                                      onClick={() => handleDelete(row._id)}
                                    />
                                </td>
                            </tr>
                            );
                            })}
                        </tbody>
                    </table>
        </Form>
        <Row>
    
        </Row>  
    </Container>
  );
}

export default  ListaClientes ;