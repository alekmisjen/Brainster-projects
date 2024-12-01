export interface FormValues {
  name: string;
  mail: string;
  phone: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  mail?: string;
  phone?: string;
  message?: string;
}
export const validateForm = (formValues: FormValues): FormErrors => {
  const errors: FormErrors = {};

  if (!formValues.name.trim()) {
    errors.name = "Full Name is required.";
  }

  if (!formValues.mail.trim()) {
    errors.mail = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.mail)) {
    errors.mail = "Enter a valid email address.";
  }

  if (!formValues.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^\+?[0-9\s\-]{7,15}$/.test(formValues.phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!formValues.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
};
