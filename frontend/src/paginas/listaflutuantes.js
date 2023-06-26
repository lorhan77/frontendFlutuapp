/*import React,{ useEffect, useState} from 'react';
//import axios from 'axios';
import { Container, Row, Col, Form, FormControl, Button, Image} from 'react-bootstrap';
import {  Link } from "react-router-dom";
import Cabecalho from '../componentes/cabecalho';
//import Rodape from '../componentes/rodape';
import './styles.css'
import flutuantesService from '../services/flutuantesService';

function ListaFlutuantes() {
  
  //const { id } = useParams();
  const [tableData, setTableData] = useState([]);
  
  
  useEffect(() => {
      async function fetchTableData () {
      
      try {
        const response = await flutuantesService.getFlutuantes();
        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchTableData();
    },[]); 

    async function handleDelete(id) {
      try {
        const response = await salasService.deleteFlutuantes(id);
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
                <Row className='headerSalas'>SALAS</Row>
                    <table className='salasTab'>
                        <thead>
                            <tr>
                                <th>Número</th>
                                <th>Tipo</th>
                                <th>Valor</th>
                                <th>Capacidade</th>
                                <th>Descrição</th>
                            </tr>
                         
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => {
                                return (
                            <tr key={index} data-toogle="tooltip" title={row.numero}>
                                <td>{row.numero}</td>
                                <td>{row.tipo}</td>
                                <td>{row.valor}</td>
                                <td>{row.capacidade}</td>
                                <td>{row.descricao}</td>
                                <td>
                                  <Link to={`/flutuantes/${row._id}`} >
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
          <Link to="/flutuantes/:id">
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
        </Row>  
    </Container>
  );
}

export default  ListaFlutuantes ;*/