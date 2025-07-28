// src/routes/RoleBasedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { getUserRoleFromToken } from "../utils/authUtils";

const RoleBasedRoute = ({ allowedRoles, children }) => {
  const userRole = getUserRoleFromToken();

  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default RoleBasedRoute;
