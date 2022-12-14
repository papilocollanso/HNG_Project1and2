import { useEffect } from "react";
import { useState } from "react";

const formLogic = () => {
  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [contactData, setContactData] = useState(initialData);

  const [errors, setErrors] = useState({});

  const [hasUserAgreed, setHasUserAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    if (Object.entries(errors).length === 0 && isSubmitting) {
      setIsSubmitting(false);
      window.scrollTo(0, 0);
      setHasSubmitted(true);
      setContactData(initialData);
      setTimeout(() => {
        setHasSubmitted(false);
      }, 3000);
    }
  }, [errors]);

  const handleChange = (e, key) => {
    setErrors({});
    setHasSubmitted(false);
    setIsSubmitting(false);
    setContactData({ ...contactData, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.scrollTo(0, 150);
    setErrors(validateData(contactData));
    setIsSubmitting(true);
    setHasUserAgreed(false);
  };

  const validateData = (values) => {
    let errors = {};
    for (const key in values) {
      if (!values[key]) {
        switch (key) {
          case "message":
            errors[key] = `Please enter a message`;
            break;
          default:
            errors[key] = `Please enter your ${key}`;
            break;
        }
      }

      if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
      }
    }
    return errors;
  };

  return {
    contactData,
    setContactData,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
    hasUserAgreed,
    setHasUserAgreed,
    hasSubmitted,
  };
};

export default formLogic;
