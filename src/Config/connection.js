import axios from  'axios';

const api = axios.create({
    //baseURL:'http://localhost:4000'
    baseURL:'http://www.burnbrain.net/peper'
    
});

export default api;