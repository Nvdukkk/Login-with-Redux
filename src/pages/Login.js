import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFailure } from "../reducers/isLoggedInSlice";
// import Cookies from "js-cookie";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasAttemptedLogin, setHasAttemptedLogin] = useState(false);

  const isLoggedIn = useSelector((state) => state.user);
  //hook useSelector để access thẳng vào store
  // const isLoggedIn = Cookies.get("isLoggedIn");


  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "1" && password === "1") {
      // Cookies.set('isLoggedIn', 'true', { expires: 1/1440 });
      dispatch(loginSuccess());
    } else {
      dispatch(loginFailure());
     }
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
