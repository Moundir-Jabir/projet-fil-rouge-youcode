import AppTextInput from "../AppTextInput"
import ErrorMessage from "./ErrorMessage"
import { useFormikContext } from "formik"

const AppFormField = ({ name, ...otherProps }) => {
    const { touched, setFieldTouched, handleChange, errors } = useFormikContext()
  return (
    <>
        <AppTextInput
            onChangeText={handleChange(name)}
            onBlur={() => setFieldTouched(name)}
            {...otherProps}
        />
        <ErrorMessage visible={touched[name]} >{errors[name]}</ErrorMessage>
    </>
  )
}

export default AppFormField