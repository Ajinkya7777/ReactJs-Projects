// src/hooks/useRole.js
import { jwtDecode } from "jwt-decode";

export const useRole = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded.role; // or decoded.authorities[0] if role is in authorities
  } catch (error) {
    console.log(error);
    return null;
  }
};
