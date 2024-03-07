import { Alert } from "react-native";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const FormImagePicker = ({ name }) => {
  const { errors, values, setFieldValue, touched } = useFormikContext();

  const addImage = (newImage) => {
    setFieldValue(name, [...values[name], newImage]);
  };

  const deleteImage = (imageToDelete) => {
    Alert.alert("Delete", "Are you sure you want to delete this image ?", [
      {
        text: "Yes",
        onPress: () => {
          const result = values[name].filter(
            (image) => image.uri != imageToDelete.uri
          );
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
        images={values[name]}
        onAddImage={addImage}
        onRemoveImage={deleteImage}
      />
      <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
    </>
  );
};

export default FormImagePicker;
