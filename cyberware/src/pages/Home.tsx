import { HeroSection } from "../components/Hero/HeroSection";
import { ServiceCard } from "../components/Services/ServiceCard";
import SectionOne from "../components/SectionOne/SectionOne";
import data from "../db.json";
import SectionTwo from "../components/SectionTwo";
import { Slider } from "../components/Slider";

export const Home = () => {
  return (
    <>
      <HeroSection heroData={data.heroSection} />
      <div className="custom-bg-dark custom-border-bottom  container-fluid py-5">
        <div className="row g-3 justify-content-center">
          <h1 className="text-center color-primary">Services</h1>
          {data.services.map((service) => (
            <div key={service.id} className="col-12 col-md-6 col-lg-4 ">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
      <SectionOne sectionOne={data.section_one} />
      <SectionTwo sectionTwo={data.section_two} />
      <Slider />
    </>
  );
};
