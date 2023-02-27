import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./AuthHandler";
import useHandlers from "./handlechange";

const useSignIn = (email, password) => {
  const navigator = useNavigate();
  const { dispatch } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    message: "",
    success: true,
  });

  const { clearFields } = useHandlers({ email, password });
  const signIn = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8080/api/v1/signin",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.data;

      if (data.email) {
        localStorage.setItem("user", JSON.stringify(data));
        dispatch({ type: "SIGN_IN", payload: data });

        setLoading(false);
        setStatus(() => {
          return {
            message: "You are successfully logged in",
            success: true,
          };
        });
        clearFields();
        navigator("/");
      } else {
        const { message } = data;
        throw Error(message);
      }
    } catch (error) {
      setLoading(false);
      clearFields();
      setStatus(() => {
        return {
          message: error.message,
          success: false,
        };
      });
    }
  };

  return {
    signIn,
    loading,
    status,
    setStatus,
  };
};

export default useSignIn;
