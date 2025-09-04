import { jwtDecode } from "jwt-decode";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { backendURL } from "../assets/data/data";
import { AuthContext } from "../../Authprotocol";

function ProtectedRoute({ children }) {
  const [token, setToken] = useState(null);
  const{isAuthenticated} = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
