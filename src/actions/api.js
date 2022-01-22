import axios from 'axios';

var api = axios.create({
    baseURL: "http://15.207.85.146",
    responseType: 'json',
    responseEncoding: 'utf8',
});

export default api;