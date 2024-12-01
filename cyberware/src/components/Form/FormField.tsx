interface FormFieldProps {
  label: string;
  name: string;
  type: "text" | "email" | "tel" | "textarea";
  value: string;
  error?: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
}
const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  value,
  error,
  onChange,
  placeholder,
}) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label color-primary">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        name={name}
        id={name}
        className={`form-control input ${error ? "is-invalid" : ""}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        name={name}
        id={name}
        className={`form-control input ${error ? "is-invalid" : ""}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    )}
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

export default FormField;
