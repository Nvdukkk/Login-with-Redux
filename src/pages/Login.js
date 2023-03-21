import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../reducers/userSlice";
import LoginForm from "../components/LoginForm";
const Login = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.status === 200) {
      navigate("/Dashboard");
    }
  });

  return (
    <div>
      <LoginForm />

      {user && <p>{user?.message}</p>}
    </div>
  );
};

export default Login;
