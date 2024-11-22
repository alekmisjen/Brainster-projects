import "./styles.css";

interface CardProps {
  title: string;
  children?: React.ReactNode;
  icon?: string;
  desc: string;
  style?: React.CSSProperties;
}

export const Card = ({ title, children, icon, desc, style }: CardProps) => {
  return (
    <>
      <div className="card" style={style}>
        <div className="card-body">
          {icon && (
            <img src={icon} alt={title} className="img-fluid card-icon " />
          )}
          {title && <h5 className="card-title">{title}</h5>}
          {desc && <p className="card-text py-2">{desc}</p>}
          {children}
        </div>
      </div>
    </>
  );
};
