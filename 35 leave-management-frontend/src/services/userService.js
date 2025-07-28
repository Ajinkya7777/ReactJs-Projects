import axios from "axios";

export const getCurrentEmployee = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  const response = await axios.get("http://localhost:8080/api/employees/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
