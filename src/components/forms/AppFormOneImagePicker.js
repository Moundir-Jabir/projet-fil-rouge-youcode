import ImageInput from "../ImageInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const AppFormOneImagePicker = ({ name }) => {
  const { errors, values, setFieldValue, touched } = useFormikContext();

  const setImage = (image) => {
    setFieldValue(name, image);
  };
  return (
    <>
      <ImageInput image={values[name]} setImage={setImage} />
      <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
    </>
  );
};

export default AppFormOneImagePicker;
