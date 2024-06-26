import axios from 'axios';

const API_URL = 'http://localhost:2021/api/v1/users'; 

export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const updateUser = async (id, userData) => {
  return axios.put(`${API_URL}/${id}`, userData);
};

export const getUser = async (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const getUsers = async () => {
  return axios.get(`${API_URL}`);
};

export const deleteUser = async (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
