import { useSelector } from "react-redux";

export default useUser = () => {
  const user = useSelector((store) => store.auth.user);
  return user;
};
