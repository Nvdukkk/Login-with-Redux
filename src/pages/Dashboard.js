import React from "react";
import { useDispatch } from "react-redux";
// import Cookies from "js-cookie";
import { logout } from "../reducers/isLoggedInSlice";
function Dashboard() {
  
  const dispatch = useDispatch();

  const handleLogout = () => {
    //Cookies.remove('isLoggedIn');
    dispatch(logout());
  };
  return (
    <div>
      <p>Bạn đã đăng nhập thành công!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
