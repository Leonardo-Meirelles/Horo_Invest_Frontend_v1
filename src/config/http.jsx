import axios from 'axios';

const urlDefault = 'http://localhost:3001';

const http = axios.create({
    baseURL: urlDefault
});

export default http;