import "./Button.css";
interface ButtonProps {
  label: string;
  handleOnClick: () => void;
  icon?: React.ReactNode;
  size?: "small" | "medium" | "large";
}

export const Button = ({
  label,
  icon,
  size = "medium",

  handleOnClick,
}: ButtonProps) => {
  return (
    <button onClick={handleOnClick} className={`button button-${size}`}>
      {icon && icon}
      {label}
    </button>
  );
};
