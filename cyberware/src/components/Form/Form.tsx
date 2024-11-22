import { useState } from "react";
import { Button } from "../Button/Button";

interface FormProps {
  name?: string;
  email: string;
  message?: string;
  newsletter?: boolean;
  phone?: string;
}
export const Form = () => {
  const [formData, setFormData] = useState<FormProps>({
    name: "",
    email: "",
    message: "",
    newsletter: false,
  });
  return (
    <form action="#" className="">
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="form-control mb-2 input"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="form-control mb-2 input"
      />
      <textarea
        name="message"
        placeholder="Message"
        // value={message}
        //onChange={handleChange}
        className="form-control mb-2 input"
        rows={3}
        required
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          name="newsletter"
          checked={formData.newsletter}
          // onChange={handleChange}
          className="form-check-input"
          id="newsletter"
        />
        <label className="form-check-label" htmlFor="newsletter">
          I would like to receive the newsletter.
        </label>
      </div>
      <Button
        label="Submit"
        handleOnClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </form>
  );
};
