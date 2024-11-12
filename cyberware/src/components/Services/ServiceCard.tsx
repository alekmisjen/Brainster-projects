import { Service } from "../../types/types";
import { Button } from "../Button/Button";
import "./services.css";

interface ServiceCardProps {
  service: Service;
}
export const ServiceCard = ({ service }: ServiceCardProps) => {
  const customHandleOnClick = () => {
    console.log("Service Button clicked");
  };
  return (
    <div>
      <div className="p-4 service-card">
        <img className="img-fluid" src={service.icon} alt="" />
        <h5>{service.title}</h5>
        <p>{service.description}</p>
        <Button label="See more" handleOnClick={customHandleOnClick}></Button>
      </div>
    </div>
  );
};
