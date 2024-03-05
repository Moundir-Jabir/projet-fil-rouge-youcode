import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import { useEffect, useState } from "react";
import { getListings } from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

const ListingScreen = ({ navigation }) => {
  const getListingsApi = useApi(getListings);
  useEffect(() => {
    getListingsApi.request();
  }, []);
  return (
    <Screen style={styles.container}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={getListingsApi.request} />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price}
            image={item.image}
            onPress={() => navigation.navigate("ListingDetail", item)}
          />
        )}
        ItemSeparatorComponent={<View style={styles.separator}></View>}
      />
    </Screen>
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
