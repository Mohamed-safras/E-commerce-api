import useAuthContext from "./AuthHandler";

const useSignOut = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "SIGN_OUT", payload: null });
  };
  return { logout };
};

export default useSignOut;
