import "./Button.css";
interface ButtonProps {
  label: React.ReactNode;
  handleOnClick?: () => void;
  icon?: React.ReactNode;
  size?: "small" | "medium" | "large" | "round";
  transparent?: boolean;
  color?: string;
  style?: React.CSSProperties;
}

export const Button = ({
  label,
  icon,
  size = "medium",
  transparent = false,
  color = "#fff",
  handleOnClick,
  style,
}: ButtonProps) => {
  return (
    <button
      onClick={handleOnClick}
      className={`button button-${size} ${
        transparent ? "button-transparent" : ""
      }`}
      style={{ color, ...style }}
    >
      {icon && icon}
      {label}
    </button>
  );
};
