import apiClient from "./client";

const endpoint = "/auth";

const login = (email, password) =>
  apiClient.post(`${endpoint}/login`, { email, password });

const register = (newUser) => {
  const data = new FormData();
  data.append("name", newUser.name);
  data.append("email", newUser.email);
  data.append("password", newUser.password);
  data.append("images", {
    name: newUser.image.fileName,
    type: newUser.image.type,
    uri: newUser.image.uri,
  });
  return apiClient.post(`${endpoint}/register`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export { login, register };
