import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./reducers/actions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasAttemptedLogin, setHasAttemptedLogin] = useState(false);

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
    setHasAttemptedLogin(true);
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
      <button onClick={handleLogin}>Đăng nhập</button>
      {isLoggedIn === false && hasAttemptedLogin && (
        <p>Đăng nhập thất bại. Vui lòng thử lại.</p>
      )}
    </div>
  );
};

export default Login;
