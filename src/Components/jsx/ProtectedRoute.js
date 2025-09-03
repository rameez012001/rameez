import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { backendURL } from "../assets/data/data";

function ProtectedRoute({ children }) {
  const [token, setToken] = useState(null);
  const verifyAuth = async () => {
    try {
      const res = await fetch(`${backendURL}/auth-verify`, {
        method: "GET",
        credentials: "include",
      });
      setToken(res.ok);
    } catch {
      setToken(false);
    }
  };

  useEffect(() => {
    verifyAuth();
  }, []);

  if (token === null) {
    return <div>Loading...</div>;
  }
  return token ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
