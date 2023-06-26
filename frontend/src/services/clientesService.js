import axios from 'axios';



var clientesService = {
  getClientes: async () => {
    var clienteAPI = axios.get('http://localhost:5000/clientes');
    return await clienteAPI;
  },

  getOneClientes: async (id) => {
    var clienteAPI = axios.get('http://localhost:5000/clientes/'+id);
    return await clienteAPI;
  },
  
  deleteClientes: async (id) => {
    var clienteAPI = axios.delete('http://localhost:5000/clientes/'+id);
    return await clienteAPI;
  },

  createClientes: async (cliente) => {
    var clienteAPI = axios.post('http://localhost:5000/clientes', cliente);
    return await clienteAPI;
  },

  updateClientes: async (id, cliente) => {
    var clienteAPI = axios.put('http://localhost:5000/clientes/'+id, cliente);
    return await clienteAPI;
  },

};

export default clientesService;