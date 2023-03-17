import React, { useEffect } from "react";

import { AppRoutes } from "./routes";
import {  useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function App() {

  const { pathname } = useLocation();
  const navigate = useNavigate()
  const isLoggedIn = Cookies.get("isLoggedIn");
  useEffect(() => {
    if (!isLoggedIn) {
      if (pathname !== "/Login") {
        navigate("/Login")
      }
    }
  },[isLoggedIn, navigate, pathname])

  return (
    <div>
      <AppRoutes />
    </div>
  )
}

export default App;
