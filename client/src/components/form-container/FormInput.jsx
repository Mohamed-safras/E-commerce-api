import React from "react";
import "../form-container/FormInput.styles.scss";
const FormInput = ({
  label,
  isPasswordShown,
  togglePassword,
  formInputs,
  Icon1,
  Icon2,
}) => {
  const { value, name } = formInputs;
  return (
    <div className="group">
      <input className="form-input" {...formInputs} />
      {name === "password" || name === "confirmPassword" ? (
        isPasswordShown ? (
          <Icon1
            onClick={togglePassword}
            className="icon"
            sx={{ fontSize: 22, color: "#a1a0a5" }}
          />
        ) : (
          <Icon2
            onClick={togglePassword}
            className="icon"
            sx={{ fontSize: 22, color: "#a1a0a5" }}
          />
        )
      ) : Icon1 ? (
        <Icon1 className="icon" sx={{ fontSize: 22, color: "#a1a0a5" }} />
      ) : null}
      {label && (
        <label className={`${value.length && "shrink"} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
