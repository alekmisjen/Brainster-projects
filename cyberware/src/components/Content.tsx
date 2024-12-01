import React, { useState } from "react";
import { FormErrors, FormValues, validateForm } from "../types/formValidation";
import FormField from "./Form/FormField";
import { Button } from "./Button/Button";

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    mail: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateForm(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formValues);
      // Add further submission logic here.
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="color-white contact d-flex flex-column"
    >
      <FormField
        label="Full Name"
        name="name"
        type="text"
        value={formValues.name}
        error={errors.name}
        onChange={handleChange}
        placeholder="Your Name"
      />
      <FormField
        label="Email address"
        name="mail"
        type="email"
        value={formValues.mail}
        error={errors.mail}
        onChange={handleChange}
        placeholder="Your Email Address"
      />

      <FormField
        label="Phone Number"
        name="phone"
        type="tel"
        value={formValues.phone}
        error={errors.phone}
        onChange={handleChange}
        placeholder="e.g., +1234567890"
      />

      <FormField
        label="Send us a Message"
        name="message"
        type="textarea"
        value={formValues.message}
        error={errors.message}
        onChange={handleChange}
        placeholder="Your Message"
      />
      <Button label="Submit" />
    </form>
  );
};

export default ContactForm;
