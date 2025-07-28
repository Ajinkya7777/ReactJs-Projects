import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/auth"; // Change if different

export const login = async (email, password) => {
  return await axios.post(`${API_BASE_URL}/login`, {
    email,
    password,
  });
};
