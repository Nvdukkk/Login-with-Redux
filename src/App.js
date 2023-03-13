import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Bạn đã đăng nhập thành công!</p>
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
