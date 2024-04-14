import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { baseURL } from "../api/client";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import { getListingById } from "../api/listings";
import { sendMessage } from "../api/message";
import ImageView from "react-native-image-viewing-pro";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { socket } from "../api/client";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(2).max(100).label("Message"),
});

const ListingDetailScreen = ({ route }) => {
  const { listingId } = route.params;
  let imageUrl = `${baseURL}/listings/image/${listingId}/`;
  const HeaderComponent = ({ imageIndex }) => {
    return (
      <SafeAreaView>
        <Text style={styles.HeaderComponentText}>
          {imageIndex + 1}/{images.length}
        </Text>
      </SafeAreaView>
    );
  };

  const [visible, setIsVisible] = useState(false);
  const { data, request } = useApi(getListingById);
  useEffect(() => {
    request(listingId);
  }, []);
  let images = [
    {
      uri: imageUrl + 0,
    },
  ];
  if (data) {
    for (i = 1; i < data.listing.nbrimages; i++)
      images.push({
        uri: imageUrl + i,
      });
  }
  const submitForm = async (values, { resetForm }) => {
    const response = await sendMessage(
      listingId,
      values.message,
      data.listing.user._id
    );
    if (!response.ok) return alert("Could not send the message.");
    alert("Message send");
    socket.emit("send message", response.data);
    resetForm();
  };
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <ScrollView style={styles.container}>
        <ImageView
          images={images}
          imageIndex={0}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
          HeaderComponent={HeaderComponent}
        />
        <TouchableOpacity onPress={() => setIsVisible(true)}>
          <Image source={images[0]} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{data?.listing?.title}</AppText>
          <AppText style={styles.subTitle}>{data?.listing?.price} $</AppText>
          {data && data?.listing.description && (
            <AppText style={styles.description}>
              {data?.listing.description}
            </AppText>
          )}
          <View style={styles.listItem}>
            <ListItem
              image={{
                uri: `${baseURL}/user/image/${data?.listing?.user?._id}`,
              }}
              title={data?.listing?.user?.name}
              subTitle={`${data?.numberOfListing} Listing`}
            />
          </View>
          <AppForm
            initialValues={{
              message: "Is still available ?",
            }}
            validationSchema={validationSchema}
            onSubmit={submitForm}
          >
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Message ..."
              inputMode="text"
              textContentType="none"
              name="message"
              multiline
              numberOfLines={3}
            />
            <SubmitButton title="Send To Seller" />
          </AppForm>
        </View>
        {data && data?.listing?.location && (
          <MapView
            style={styles.map}
            initialRegion={data?.listing?.location}
            minZoomLevel={8}
          >
            <Marker coordinate={data?.listing?.location} />
          </MapView>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontWeight: "500",
    fontSize: 22,
  },
  subTitle: {
    color: colors.green,
    fontWeight: "bold",
    fontSize: 20,
  },
  listItem: {
    marginTop: 40,
  },
  HeaderComponentText: {
    color: colors.white,
    fontSize: 20,
    textAlign: "center",
  },
  description: {
    paddingTop: 20,
  },
  map: {
    width: "100%",
    height: 500,
  },
});
