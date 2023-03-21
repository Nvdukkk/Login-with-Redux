import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getInfo } from "../api/getInfo";
import { NavLink } from "react-router-dom";
import { clearUserInfo, selectUserInfo } from "../reducers/userSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  const handleLogout = () => {
    dispatch(clearUserInfo());
  };
  useEffect(() => {
    dispatch(getInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>Thông tin người dùng</h1>
      <p>Welcome: {user?.data.name}</p>
      <p>Email: {user?.data.email}</p>
      <p>Phone: {user?.data.phone}</p>

      <NavLink to="/Login" onClick={handleLogout}>
        Logout
      </NavLink>
    </div>
  );
}

export default Dashboard;
