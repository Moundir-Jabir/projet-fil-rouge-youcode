import { TextInput, View, StyleSheet } from 'react-native'
import defaultStyles from "../config/styles"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors';

const AppTextInput = ({icon, ...otherProps}) => {
  return (
    <View style={styles.container}>
        { icon && <MaterialCommunityIcons name={icon} color={colors.medium} size={20} style={styles.icon} /> }
        <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    }
})