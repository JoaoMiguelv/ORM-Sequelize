import axios from 'axios';

const urlapi = axios.create({
    baseURL: 'http://localhost:3010'
});

export default urlapi
