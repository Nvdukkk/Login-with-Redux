import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { logout } from "./reducers/actions";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch()
  
   const handleLogout = () => {
     dispatch(logout())
   }
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Bạn đã đăng nhập thành công!</p>
          <button onClick={handleLogout}>Logout</button>
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
