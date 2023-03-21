import Cookies from "js-cookie";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getInfo = createAsyncThunk("user/info", async () => {
  const token = Cookies.get("token");
  const res = await axios.get(process.env.REACT_APP_API_URL + "/me", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const apiData = res.data

  return apiData;
});
