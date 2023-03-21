import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axios from "axios";

export const userIsLoging = createAsyncThunk(
  "user/login",
  async ({ username, password }) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
      code: username,
      password: password
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const apiData = response.data;

    if (apiData.status === 200) {
      Cookies.set("isLoggedIn", true, { expires: 1 / 24 });
      Cookies.set("token", apiData.data, { expires: 1 / 24 });
    }

    return apiData;
  }
);
