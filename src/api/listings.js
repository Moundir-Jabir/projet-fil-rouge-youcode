import apiClient from "./client";

const endpoint = "/listings";

const getListings = (selectedCategory) => {
  let url = endpoint;
  if (selectedCategory) url += `?category=${selectedCategory}`;
  return apiClient.get(url);
};

const getListingById = (id) => apiClient.get(`${endpoint}/${id}`);

const addListing = (listing, location) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("description", listing.description);
  if (listing.category) data.append("category", listing.category._id);
  listing.images.forEach((image, index) =>
    data.append("images", {
      name: image.fileName,
      type: image.type,
      uri: image.uri,
    })
  );
  if (location) data.append("location", JSON.stringify(location));
  return apiClient.post(endpoint, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export { getListings, addListing, getListingById };
