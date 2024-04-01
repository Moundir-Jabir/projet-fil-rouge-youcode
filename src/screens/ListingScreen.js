import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import { useEffect } from "react";
import { getListings } from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
import { baseURL } from "../api/client";

const ListingScreen = ({ navigation }) => {
  const getListingsApi = useApi(getListings);
  useEffect(() => {
    getListingsApi.request();
  }, []);
  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.container}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={getListingsApi.request} />
          </>
        )}
        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing._id}
          renderItem={({ item }) => {
            let imageUrl = `${baseURL}/listings/image/${item._id}/0`;
            return (
              <Card
                title={item.title}
                subTitle={`${item.price} $`}
                image={{ uri: imageUrl }}
                onPress={() =>
                  navigation.navigate("ListingDetail", { listingId: item._id })
                }
              />
            );
          }}
          ItemSeparatorComponent={<View style={styles.separator}></View>}
          refreshing={getListingsApi.loading}
          onRefresh={() => getListingsApi.request()}
        />
      </Screen>
    </>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greyBackground,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  separator: {
    height: 20,
  },
});
