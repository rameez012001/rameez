import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Authprotocol";

function ProtectedRoute({ children }) {
  const [token, setToken] = useState(null);
  const{isAuthenticated} = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
