import * as SecureStore from "expo-secure-store";

const key = "UserToken";

const storeUserToken = async (UserToken) => {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(UserToken));
  } catch {
    console.log("Error storing the auth token");
  }
};

const getUserToken = async () => {
  try {
    let result = await SecureStore.getItemAsync(key);
    result = JSON.parse(result);
    return result;
  } catch {
    console.log("Error getting the auth token");
  }
};

const deleteUserToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch {
    console.log("Error deleting the auth token");
  }
};

export { storeUserToken, getUserToken, deleteUserToken };
