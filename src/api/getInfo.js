import Cookies from "js-cookie";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getInfo = createAsyncThunk("user/info", async () => {
  const token = Cookies.get("token");
  const res = await fetch("http://222.252.23.171:8082/api/me", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const apiData = await res.json();

  return apiData;
});
