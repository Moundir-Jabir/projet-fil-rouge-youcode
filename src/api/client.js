import { create } from "apisauce";
import { getUserToken } from "../storage";

export const baseURL = "http://192.168.8.150:4000/api";

const apiClient = create({
  baseURL,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const UserToken = await getUserToken();
  if (!UserToken) return;
  request.headers["Authorization"] = `Bearer ${UserToken.token}`;
});

export default apiClient;
