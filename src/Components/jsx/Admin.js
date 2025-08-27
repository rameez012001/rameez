import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import { backendURL } from "../assets/data/data";

function Admin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");
  const fillCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const login = async () => {
    try {
      const res = await fetch(`${backendURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      if (data.tokenType === "Bearer") {
        localStorage.setItem("auth-token", data.accessToken);
        setStatus("success");
        setCredentials({
          username: "",
          password: "",
        });
        navigate("/postblog");
      } else {
        setStatus("error");
        setMessage(data.error);
        navigate("/login");
      }
    } catch (err) {
      setStatus("error");
      setMessage(err);
    }
  };
  return (
    <div className="loginForm">
      {status === "error" && <ErrorComponent message={message} />}
      <div className="content-container">
        <input
          type="text"
          placeholder="enter username"
          required
          name="username"
          value={credentials.username}
          onChange={fillCredentials}
        />
        <input
          type="password"
          placeholder="enter password"
          required
          name="password"
          value={credentials.password}
          onChange={fillCredentials}
        />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Admin;
