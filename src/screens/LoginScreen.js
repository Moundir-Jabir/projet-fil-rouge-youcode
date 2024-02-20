import Screen from "../components/Screen"
import {Image, StyleSheet} from "react-native"
import * as Yup from "yup"
import { AppForm, AppFormField, SubmitButton } from "../components/forms"

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppForm
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
        >
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
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
})