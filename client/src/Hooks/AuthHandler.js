import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("Context not available");
  }
  return context;
};

export default useAuthContext;
