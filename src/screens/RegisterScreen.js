import Screen from "../components/Screen"
import {StyleSheet} from "react-native"
import * as Yup from "yup"
import { AppForm, AppFormField, SubmitButton } from "../components/forms"

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
        <AppForm
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
        >
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
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
})