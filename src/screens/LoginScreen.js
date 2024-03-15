import Screen from "../components/Screen";
import ActivityIndicator from "../components/ActivityIndicator";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import { login } from "../api/auth";
import { useDispatch } from "react-redux";
import { login as loginStore } from "../redux/auth/authSlice";
import useApi from "../hooks/useApi";
import { useEffect } from "react";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { data, error, loading, request } = useApi(login);
  const handleSubmit = async ({ email, password }) => {
    await request(email, password);
  };
  useEffect(() => {
    if (data) dispatch(loginStore(data));
  }, [data]);
  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppForm
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <ErrorMessage visible={error}>{error}</ErrorMessage>
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
          <SubmitButton title="Login" />
        </AppForm>
      </Screen>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
