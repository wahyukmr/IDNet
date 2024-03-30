import {useState} from 'react';

const emailRegex =
  /^(?=(?:[^<>()\[\]\\.,;:\s@"]+(?:\.[^<>()\[\]\\.,;:\s@"]+)*)|(?:(".+")))[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const useForm = initialValues => {
  const [inputValues, setInputValues] = useState(initialValues);
  const [errorMsg, setErrorMsg] = useState(initialValues);

  const handleChange = (field, value) => {
    setInputValues(prevValues => ({
      ...prevValues,
      [field]: value,
    }));
    handleError(field, value);
  };

  const handleError = (field, value) => {
    let error;
    if (field === 'email' && !emailRegex.test(value)) {
      error = 'Invalid email';
    } else if (field === 'password' && !passwordRegex.test(value)) {
      error = "Password doesn't meet criteria";
    } else if (field === 'confirmPassword' && value !== inputValues.password) {
      error = "Passwords don't match";
    } else {
      error = null;
    }
    setErrorMsg(prevValues => ({
      ...prevValues,
      [field]: error,
    }));
  };

  const validForm =
    inputValues.email &&
    inputValues.password &&
    errorMsg.email === null &&
    errorMsg.password === null;

  return {
    inputValues,
    handleChange,
    errorMsg,
    validForm,
  };
};

export default useForm;
