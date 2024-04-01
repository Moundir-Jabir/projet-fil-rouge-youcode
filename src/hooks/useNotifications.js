import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { useEffect } from "react";
import { setExpoPushToken } from "../api/user";

export default useNotifications = () => {
  useEffect(() => {
    registerForPushNotificationsAsync().then(async (token) => {
      setExpoPushToken(token);
    });
    Notifications.addNotificationReceivedListener((notification) =>
      console.log(notification.request.content.data)
    );
    Notifications.addNotificationResponseReceivedListener((response) =>
      console.log(response.notification.request.content.data)
    );
  });

  const registerForPushNotificationsAsync = async () => {
    let token;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (
      await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig.extra.eas.projectId,
      })
    ).data;

    return token;
  };
};
