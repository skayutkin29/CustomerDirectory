import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/customers',
});

export const getCustomers = () => API.get('/');
export const addCustomer = (data) => API.post('/', data);
export const deleteCustomer = (id) => API.delete(`/${id}`);