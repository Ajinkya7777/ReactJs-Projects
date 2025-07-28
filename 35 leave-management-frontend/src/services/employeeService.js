// services/EmployeeService.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/employees";

export const getEmployees = (page = 0, size = 5) => {
  const token = localStorage.getItem("token"); // or sessionStorage if used
  return axios.get(`${BASE_URL}?page=${page}&size=${size}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Add this inside EmployeeService.js
// services/employeeService.js
export const createEmployee = (employeeData) => {
  const token = localStorage.getItem("token");
  return axios.post("http://localhost:8080/api/employees", employeeData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
