// services/departmentService.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/departments";

export const getDepartments = () => {
  const token = localStorage.getItem("token");
  return axios.get(BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createDepartment = (data) => {
  const token = localStorage.getItem("token");
  return axios.post(BASE_URL, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
