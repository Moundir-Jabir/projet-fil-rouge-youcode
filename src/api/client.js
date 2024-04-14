import { create } from "apisauce";
import { getUserToken } from "../storage";
import io from "socket.io-client";

export const endPoint = "http://192.168.8.150:4000";
export const baseURL = "http://192.168.8.150:4000/api";

const apiClient = create({
  baseURL,
});

export let socket = io(endPoint);

apiClient.addAsyncRequestTransform(async (request) => {
  const UserToken = await getUserToken();
  if (!UserToken) return;
  request.headers["Authorization"] = `Bearer ${UserToken.token}`;
});

export default apiClient;
