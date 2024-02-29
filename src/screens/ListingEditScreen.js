import Screen from "../components/Screen";
import { StyleSheet, Text } from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
  AppFormImagePicker,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).max(100).label("Title"),
  price: Yup.number().min(1).max(10000).label("Price"),
  category: Yup.object()
    .required()
    .nullable()
    .shape({
      label: Yup.string().required(),
      value: Yup.number().required().positive().integer(),
    })
    .label("Category"),
  description: Yup.string().optional().label("Description"),
  images: Yup.array().min(1).label("Images"),
});

const ListingEditScreen = () => {
  const location = useLocation();
  const categories = [
    {
      backgroundColor: "#fc5c65",
      icon: "floor-lamp",
      label: "Furniture",
      value: 1,
    },
    {
      backgroundColor: "#fd9644",
      icon: "car",
      label: "Cars",
      value: 2,
    },
    {
      backgroundColor: "#fed330",
      icon: "camera",
      label: "Cameras",
      value: 3,
    },
    {
      backgroundColor: "#26de81",
      icon: "cards",
      label: "Games",
      value: 4,
    },
    {
      backgroundColor: "#2bcbba",
      icon: "shoe-heel",
      label: "Clothing",
      value: 5,
    },
    {
      backgroundColor: "#45aaf2",
      icon: "basketball",
      label: "Sports",
      value: 6,
    },
    {
      backgroundColor: "#4b7bec",
      icon: "headphones",
      label: "Movies & Music",
      value: 7,
    },
    {
      backgroundColor: "#a55eea",
      icon: "book-open-variant",
      label: "Books",
      value: 8,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Other",
      value: 9,
    },
  ];
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: null,
          category: null,
          description: "",
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormImagePicker name="images" />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Title"
          inputMode="text"
          textContentType="none"
          name="title"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Price"
          inputMode="decimal"
          textContentType="none"
          name="price"
          width={120}
        />
        <AppFormPicker
          placeholder="Category"
          items={categories}
          name="category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Description"
          inputMode="text"
          textContentType="none"
          name="description"
          multiline
          numberOfLines={3}
        />
        <SubmitButton title="POST" />
      </AppForm>
      <Text style={styles.paragraph}>{JSON.stringify(location)}</Text>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
