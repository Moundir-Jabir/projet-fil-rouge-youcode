import apiClient from "./client";

const endpoint = "/message";

const sendMessage = (listingId, message, sellerId) =>
  apiClient.post(`${endpoint}/${listingId}`, { message, sellerId });

export { sendMessage };
