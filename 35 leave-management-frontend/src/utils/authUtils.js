// src/utils/authUtils.js

export const getUserRoleFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.role || null;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};

export const isAuthenticated = () => !!localStorage.getItem("token");
