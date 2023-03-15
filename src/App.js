import React from "react";
 import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"
// import Cookies from "js-cookie";
function App() {
  
// const isLoggedIn = Cookies.get("isLoggedIn")
  const isLoggedIn = useSelector((state) => state.user);
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Dashboard />
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
}

export default App;
