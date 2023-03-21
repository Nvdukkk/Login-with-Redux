import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { userIsLoging } from "../reducers/loginReducer";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectUser } from "../reducers/userSlice";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    dispatch(userIsLoging({ username, password }));
  };
  useEffect(() => {
    if (user?.status === 200) {
      navigate("/Dashboard");
    }
  });

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
      <button onClick={handleLoginFormSubmit} disabled={isLoading}>
        Đăng nhập
      </button>
      {isLoading && <p>Loading..</p>}
      {user && <p>{user?.message}</p>}
    </div>
  );
};

export default Login;
