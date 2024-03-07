import apiClient from "./client";

const endpoint = "/category";

const getCategories = () => apiClient.get(endpoint);

export { getCategories };
