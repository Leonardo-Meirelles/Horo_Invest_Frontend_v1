import axios from 'axios';

const urlDefault = process.env.REACT_APP_API;

const http = axios.create({
    baseURL: urlDefault
});

export default http;