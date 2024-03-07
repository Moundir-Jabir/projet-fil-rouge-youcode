import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const AppFormField = ({ name, ...otherProps }) => {
  const { touched, setFieldTouched, values, setFieldValue, errors } =
    useFormikContext();
  const handleText = (value) => {
    setFieldValue(name, value);
  };
  return (
    <>
      <AppTextInput
        onChangeText={handleText}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
    </>
  );
};

export default AppFormField;
