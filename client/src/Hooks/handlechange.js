import { useState } from "react";

const useHandlers = (initialFormFields) => {
  const [formField, setFormField] = useState(initialFormFields);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);
  const clearFields = () => {
    setFormField(initialFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField(() => ({ ...formField, [name]: value }));
  };

  const togglePassword = () => {
    setIsPasswordShown(() => !isPasswordShown);
  };
  const toggleConfirmPassword = () => {
    setIsConfirmPasswordShown(() => !isConfirmPasswordShown);
  };
  return {
    formField,
    isPasswordShown,
    isConfirmPasswordShown,
    toggleConfirmPassword,
    clearFields,
    handleChange,
    togglePassword,
  };
};

export default useHandlers;
