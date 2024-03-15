import Screen from "../components/Screen";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import AppFormOneImagePicker from "../components/forms/AppFormOneImagePicker";
import ActivityIndicator from "../components/ActivityIndicator";
import { register } from "../api/auth";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/authSlice";
import useApi from "../hooks/useApi";
import { useEffect } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
  image: Yup.object().required().label("Profil Image"),
});

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { data, error, loading, request } = useApi(register);
  const handleSubmit = async (values) => {
    await request(values);
  };
  useEffect(() => {
    if (data) dispatch(login(data));
  }, [data]);
  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: "", email: "", password: "", image: null }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <ErrorMessage visible={error}>{error}</ErrorMessage>
          <AppFormOneImagePicker name="image" />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="account"
            placeholder="Name"
            inputMode="text"
            textContentType="name"
            name="name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            placeholder="Email"
            inputMode="email"
            textContentType="emailAddress"
            name="email"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            name="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
