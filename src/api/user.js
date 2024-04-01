import apiClient from "./client";

const endpoint = "/user";

const setExpoPushToken = (token) =>
  apiClient.patch(`${endpoint}/expoPushToken`, { token });

export { setExpoPushToken };
