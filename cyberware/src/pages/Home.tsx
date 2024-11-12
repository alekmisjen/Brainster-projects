import { HeroSection } from "../components/Hero/HeroSection";
import { ServiceCard } from "../components/Services/ServiceCard";
import data from "../db.json";
import "style.css";

export const Home = () => {
  return (
    <>
      <HeroSection heroData={data.heroSection} />
      <div className="custom-bg-dark  container-fluid py-5">
        <div className="row g-3 justify-content-center">
          <h1 className="text-center color-primary">Services</h1>
          {data.services.map((service) => (
            <div key={service.id} className="col-12 col-md-6 col-lg-4 ">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
