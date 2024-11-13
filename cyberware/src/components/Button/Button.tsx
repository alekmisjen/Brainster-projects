import "./Button.css";
interface ButtonProps {
  label: React.ReactNode;
  handleOnClick: () => void;
  icon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  transparent?: boolean;
  color?: string;
}

export const Button = ({
  label,
  icon,
  size = "medium",
  transparent = false,
  color = "#fff",
  handleOnClick,
}: ButtonProps) => {
  return (
    <button
      onClick={handleOnClick}
      className={`button button-${size} ${
        transparent ? "button-transparent" : ""
      }`}
      style={{ color }}
    >
      {icon && icon}
      {label}
    </button>
  );
};
