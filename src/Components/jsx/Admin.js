import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import { backendURL } from "../assets/data/data";
import { AuthContext } from "../../Authprotocol";

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
  const {login} = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const res = await login(credentials);
      if (res.ok) {
        setStatus("success");
        setCredentials({
          username: "",
          password: "",
        });
        navigate("/postblog");
      } else {
        const data = await res.json();
        setStatus("error");
        setMessage(data.error || "Login Failed");
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
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Admin;
