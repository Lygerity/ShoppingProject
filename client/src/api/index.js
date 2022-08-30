import axios from 'axios';

const PORT = 9000;
console.log('PORT: ', PORT);

const API = axios.create({ baseURL: `http://localhost:${PORT}`});

export const fetchItems = () => API.get('/items');

export const fetchItem = (id) => API.get(`/items/${id}`);

export const fetchCart = () => API.get('/items/cart');