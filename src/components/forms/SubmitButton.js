import { useFormikContext } from "formik";
import AppButton from "../AppButton";
import colors from "../../config/colors";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton onPress={handleSubmit} title={title} color={colors.red} />;
};

export default SubmitButton;
