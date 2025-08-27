import { jwtDecode } from "jwt-decode";
import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("auth-token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  try {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      localStorage.removeItem("auth-token");
      return <Navigate to="/login" replace />;
    }
  } catch (error) {
    localStorage.removeItem("auth-token");
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
