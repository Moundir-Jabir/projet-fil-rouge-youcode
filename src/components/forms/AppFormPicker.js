import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const AppFormPicker = ({ name, ...otherProps }) => {
  const { errors, values, setFieldValue } = useFormikContext();
  const handlePicker = (value) => {
    setFieldValue(name, value);
  };
  return (
    <>
      <AppPicker
        selectedItem={values[name]}
        setSelectedItem={handlePicker}
        {...otherProps}
      />
      <ErrorMessage visible={true}>{errors[name]}</ErrorMessage>
    </>
  );
};

export default AppFormPicker;
