import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Alert, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/clothing-logo.jpg";
import GoogleIcon from "../../assets/google.svg";
import Button from "../../components/button-component/Button";
import FormInput from "../../components/form-container/FormInput";
import useAuthContext from "../../Hooks/AuthHandler";
import useHandlers from "../../Hooks/handlechange";

import "../auth/auth.styles.scss";
const initialFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
  username: "",
  firstName: "",
  lastName: "",
  avatar: "",
  address: {
    street1: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    location: {
      type: "Point",
      coordinates: [],
    },
  },
};

const SignUp = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const {
    formField,
    handleChange,
    clearFields,
    togglePassword,
    isPasswordShown,
    isConfirmPasswordShown,
    toggleConfirmPassword,
  } = useHandlers(initialFormFields);

  const [status, setStatus] = useState({
    message: "",
    success: "",
  });

  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);
  const {
    username,
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    address,
  } = formField;

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const signUp = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setStatus(() => ({
        ...status,
        message: "password and confirm password are do not match",
      }));
      return;
    }
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("avatar", image);
      formData.append("username", username);
      formData.append("password", password);
      formData.append("email", email);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("address", address);

      const res = await axios.post(
        "http://localhost:8080/api/v1/user/register",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );

      const data = await res.data;

      if (data.email) {
        localStorage.setItem("user", JSON.stringify(data));
        dispatch({ type: "SIGN_IN", payload: data });
        setLoading(false);
        navigate("/");
      } else {
      }
      setStatus(() => ({
        message: data.message,
        success: data.success,
      }));
      clearFields();
      setLoading(false);
    } catch (error) {
      setStatus(() => ({
        message: error.message,
        success: error.success,
      }));

      clearFields();
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="signup-signin-container">
          <div className="logo">
            <img src={Logo} alt="crown-logo" />
          </div>
          <div className="signup-signin-header">
            <h2>Not registed yet?</h2>
            <h5>Create new account</h5>
          </div>
          <div style={{ margin: "15px 0" }}>
            {status.success === false && (
              <Alert
                severity="error"
                onClose={() => setStatus(() => ({ ...status, success: true }))}
              >
                {status.message}
              </Alert>
            )}
          </div>

          <form onSubmit={signUp}>
            <FormInput
              label="User Name"
              formInputs={{
                onChange: handleChange,
                value: username,
                type: "text",
                name: "username",
                required: true,
              }}
            />
            <FormInput
              label="First Name"
              formInputs={{
                onChange: handleChange,
                value: firstName,
                type: "text",
                name: "firstName",
                required: true,
              }}
            />
            <FormInput
              label="Last Name"
              formInputs={{
                onChange: handleChange,
                value: lastName,
                type: "text",
                name: "lastName",
                required: true,
              }}
            />
            <FormInput
              label="Email"
              Icon1={AlternateEmailOutlinedIcon}
              formInputs={{
                onChange: handleChange,
                value: email,
                type: "email",
                name: "email",
                required: true,
              }}
            />
            <FormInput
              label="Password"
              isPasswordShown={isPasswordShown}
              togglePassword={togglePassword}
              Icon1={VisibilityIcon}
              Icon2={VisibilityOffIcon}
              formInputs={{
                onChange: handleChange,
                value: formField.password,
                type: !isPasswordShown ? "password" : "text",
                name: "password",
                required: true,
              }}
            />
            <FormInput
              label="Confirm Password"
              Icon1={VisibilityIcon}
              Icon2={VisibilityOffIcon}
              togglePassword={toggleConfirmPassword}
              isPasswordShown={isConfirmPasswordShown}
              formInputs={{
                onChange: handleChange,
                value: confirmPassword,
                type: !isConfirmPasswordShown ? "password" : "text",
                name: "confirmPassword",
                required: true,
              }}
            />
            <input
              style={{ padding: "10px 0", width: "100%" }}
              type="file"
              onChange={handleFileChange}
            />
            {loading ? (
              <CircularProgress size={30} />
            ) : (
              <Button type="submit" style_type="primary" title="Sign Up" />
            )}
          </form>
          <div className="or-container">
            <p>or</p>
            <div className="border" />
          </div>
        </div>
        <div className="link-container">
          <p>Already a user? </p>
          <Link className="link" to="/signin">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
