import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Clientes from './paginas/clientes';
import Home from './paginas/home';
import Funcionarios from './paginas/funcionarios';
import { Container } from 'react-bootstrap';
//import Salas from './paginas/salas';
import  ListaSalas from './paginas/listasalas';
import  ListaClientes from './paginas/listaclientes';
import  ListaFuncionarios from './paginas/listafuncionarios';
import Index from './paginas/index';
import Reservas from './paginas/reservas';
import Flutuantes from './paginas/flutuantes';

function App() {
  
  return (
    
   
      <Container fluid>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/clientes/:id" element={<Clientes/>} />
          <Route path="/funcionarios/:id" element={<Funcionarios/>} />
       
          <Route path="/flutuantes" element={< Flutuantes/>} />
          <Route path="/reservas" element={< Reservas/>} />
          <Route path="/reservas/:id" element={< Reservas/>} />
          <Route path="/clientes" element={< ListaClientes/>} />
          <Route path="/funcionarios" element={< ListaFuncionarios/>} />
          <Route path="/index" element={<Index/>} />
        </Routes>
      </BrowserRouter>
      </Container>

   

  );
}

export default App;
