import axios from 'axios';

const api = axios.create({
    // PULO DO GATO - Porque não utilizar o recurso nativo 'fetch', pois o axios permite que seja criado uma url base para todas as requisições
    baseURL : 'http://localhost:3333'
});

export default api;