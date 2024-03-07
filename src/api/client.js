import { create } from "apisauce";

export const baseURL = "http://192.168.8.150:4000/api";

const apiClient = create({
  baseURL,
});

export default apiClient;
