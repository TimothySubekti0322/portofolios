const checkContactForm = (
  name: string,
  setNameError: React.Dispatch<React.SetStateAction<string>>,
  email: string,
  setEmailError: React.Dispatch<React.SetStateAction<string>>,
  message: string,
  setMessageError: React.Dispatch<React.SetStateAction<string>>
): boolean => {
  let isErrors = false;
  if (name === "") {
    setNameError("Name is required");
    isErrors = true;
  } else {
    setNameError("");
  }
  if (email === "") {
    setEmailError("Email is required");
    isErrors = true;
  } else {
    setEmailError("");
  }
  if (message === "") {
    setMessageError("Message is required");
    isErrors = true;
  } else {
    setMessageError("");
  }
  return isErrors;
};

export { checkContactForm };
