import { getRedirectResult } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/clothing-logo.jpg";
import GoogleIcon from "../../assets/google.svg";
import Button from "../../components/button-component/Button";
import FormInput from "../../components/form-container/FormInput";

import useHandlers from "../../Hooks/handlechange";
import { createUserFromAuth } from "../../utils/firebase/createUserFromAuth";
import { auth } from "../../utils/firebase/firebase.utils";
import "../auth/auth.styles.scss";

import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { Alert, CircularProgress } from "@mui/material";
import useAuthContext from "../../Hooks/AuthHandler";
import useSignIn from "../../Hooks/SignIn";
const initialFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const navigator = useNavigate();

  const { formField, handleChange, togglePassword, isPasswordShown } =
    useHandlers(initialFormFields);

  const { email, password } = formField;
  const { signIn, loading, status, setStatus } = useSignIn(email, password);

  const handelSubmit = (event) => {
    signIn(event);
  };

  useEffect(() => {
    const redirect = async () => {
      try {
        const response = await getRedirectResult(auth);
        if (response) {
          const { user } = response;
          await createUserFromAuth(user);

          navigator("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
    redirect();
  }, [navigator]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="logo">
          <img src={Logo} alt="crown-logo" />
        </div>
        <div className="signup-signin-container">
          <div className="signup-signin-header">
            <h2>Let's sign you in.</h2>
            <h5>You've been missed!</h5>
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

          <form onSubmit={handelSubmit}>
            <FormInput
              label="Email"
              Icon1={AlternateEmailOutlinedIcon}
              formInputs={{
                onChange: handleChange,
                value: formField.email,
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
            {loading ? (
              <CircularProgress size={30} />
            ) : (
              <Button type="submit" style_type="primary" title="Login" />
            )}
          </form>
          <div className="or-container">
            <p>or</p>
            <div className="border" />
          </div>

          <div className="third-party-signin">
            <Button
              type="button"
              Icon={GoogleIcon}
              title="Signin with Google"
            />
          </div>
        </div>
        <div className="link-container">
          <p>Not registed yet ? </p>
          <Link className="link" to="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
