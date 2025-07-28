import React from "react";
import { Navigate } from "react-router-dom";
import { useRole } from "../hooks/useRole";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = useRole();

  if (!token) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }

  if (!role || !allowedRoles.includes(role)) {
    // Logged in but no permission
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
