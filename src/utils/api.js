import axios from "axios";

export const API = axios.create({
    baseURL: 'http://localhost:8080/products',
    timeout: 1000,
    withCredentials: true,
  });