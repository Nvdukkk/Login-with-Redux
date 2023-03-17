import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { getInfo } from "../api/getInfo";
import { NavLink } from "react-router-dom";
import { clearUserInfo, setUserInfo } from "../reducers/userInfo";

function Dashboard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    Cookies.remove("isLoggedIn");
    Cookies.remove("token");
    dispatch(clearUserInfo());
  };

  const fetchData = async () => {
    const apiData = await getInfo();
    dispatch(setUserInfo(apiData.data));
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Thông tin người dùng</h1>
      <p>Welcome: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>

      <NavLink to="/Login" onClick={handleLogout}>
        Logout
      </NavLink>
    </div>
  );
}

export default Dashboard;
