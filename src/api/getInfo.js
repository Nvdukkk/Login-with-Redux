import Cookies from "js-cookie";

export const getInfo = async () => {
  try {
    const token = Cookies.get("token");
    const res = await fetch("http://222.252.23.171:8082/api/me", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const apiData = await res.json();
    return apiData;
  } catch (error) {
    console.error(error);
    return null;
  }
};
