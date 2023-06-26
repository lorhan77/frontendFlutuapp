import React,{ useEffect, useState} from 'react';
//import axios from 'axios';
import { Container, Row, Col, Form, FormControl, Button, Image} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Cabecalho from '../componentes/cabecalho';
//import Rodape from '../componentes/rodape';
import './styles.css'
import funcionariosService from '../services/funcionariosService';


function ListaFuncionarios() {
  
  const [tableData, setTableData] = useState([]);
  
  
  useEffect(() => {
      async function fetchTableData () {
      
      try {
        const response = await funcionariosService.getFuncionarios();
        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchTableData();
    },[]); 

    async function handleDelete(id) {
      try {
        const response = await funcionariosService.deleteFuncionarios(id);
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
                <Row className='headerSalas'>FUNCIONARIOS</Row>
                    <table className='salasTab'>
                        <thead>
                            <tr>
                                <th>CPF</th>
                                <th>Nome</th>
                                <th>CEP</th>
                                <th>Email</th>
                                <th>Fone</th>
                                <th>Função</th>
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
                                <td>{row.funcao}</td>
                                <td>
                                  <Link to={`/funcionarios/${row._id}`} >
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
          <Link to="/funcionarios/:id">
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

export default  ListaFuncionarios ;