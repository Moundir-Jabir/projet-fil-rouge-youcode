import { Alert } from "react-native";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const FormImagePicker = ({ name }) => {
  const { errors, values, setFieldValue, touched } = useFormikContext();

  const addImage = (newUri) => {
    setFieldValue(name, [...values[name], newUri]);
  };

  const deleteImage = (uriDeleted) => {
    Alert.alert("Delete", "Are you sure you want to delete this image ?", [
      {
        text: "Yes",
        onPress: () => {
          const result = values[name].filter((uri) => uri != uriDeleted);
          setFieldValue(name, result);
        },
      },
      {
        text: "No",
      },
    ]);
  };
  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={addImage}
        onRemoveImage={deleteImage}
      />
      <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
    </>
  );
};

export default FormImagePicker;
