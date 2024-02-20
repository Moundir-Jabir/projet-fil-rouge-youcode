import { StyleSheet } from "react-native"
import AppText from "../AppText"
import colors from "../../config/colors"

const ErrorMessage = ({children, visible}) => {
    if (!children || !visible)
        return null

  return (
    <AppText style={styles.text}>{children}</AppText>
  )
}

export default ErrorMessage

const styles = StyleSheet.create({
    text: {
        color: colors.red
    }
})