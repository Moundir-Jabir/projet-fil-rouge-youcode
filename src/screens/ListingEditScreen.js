import Screen from "../components/Screen";
import { StyleSheet } from "react-native";
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
import useApi from "../hooks/useApi";
import { getCategories } from "../api/categories";
import { useEffect } from "react";
import { addListing } from "../api/listings";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).max(100).label("Title"),
  price: Yup.number().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().optional().label("Description"),
  images: Yup.array().min(1).label("Images"),
});

const ListingEditScreen = () => {
  const location = useLocation();
  const { data: categories, request: loadCategories } = useApi(getCategories);
  useEffect(() => {
    loadCategories();
  }, []);
  const submitForm = async (values, { resetForm }) => {
    const response = await addListing(values, location);
    if (!response.ok) return alert("Could not save the listimg.");
    alert("Success");
    resetForm();
  };
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
        onSubmit={submitForm}
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
