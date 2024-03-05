import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.8.150:4000/api",
});

export default apiClient;
