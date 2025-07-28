// src/routes/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/authUtils";

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
