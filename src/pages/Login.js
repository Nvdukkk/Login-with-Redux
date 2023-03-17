import React, { useState } from "react";

import Cookies from "js-cookie";
import { handleLogin } from "../api/handleLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasAttemptedLogin, setHasAttemptedLogin] = useState(false);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    const apiData = await handleLogin(username, password);
    setData(apiData);

    if (apiData.status === 200) {
      Cookies.set("isLoggedIn", true, { expires: 1 / 40 });
      Cookies.set("token", apiData.data, { expires: 1 / 40 });
      navigate("/Dashboard");
    } else {
      setHasAttemptedLogin(true);
    }
  };

  return (
    <div>
      <h1>Đăng nhập</h1>
      <div>
        <label htmlFor="username">Tên đăng nhập:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Mật khẩu:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLoginFormSubmit}>Đăng nhập</button>
      {hasAttemptedLogin && <p>{data.message}</p>}
    </div>
  );
};

export default Login;
