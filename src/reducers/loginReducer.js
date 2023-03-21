import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const userIsLoging = createAsyncThunk(
  "user/login",
  async ({ username, password }) => {
    const res = await fetch("http://222.252.23.171:8082/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: username,
        password: password,
      }),
    });

    const apiData = await res.json();

    if (apiData.status === 200) {
      Cookies.set("isLoggedIn", true, { expires: 1 / 24 });
      Cookies.set("token", apiData.data, { expires: 1 / 24 });
    }

    return apiData;
  }
);
