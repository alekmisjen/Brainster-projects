import { HeroSection } from "../components/Hero/HeroSection";
//import { ServiceCard } from "../components/Services/ServiceCard";
import SectionOne from "../components/SectionOne/SectionOne";
import data from "../db.json";
import SectionTwo from "../components/SectionTwo";
import { Slider } from "../components/Slider";
import { Card } from "../components/Card/Card";
import { Button } from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Testimonial from "../components/Testimonial/Testimonial";
import { Team } from "../components/Team/Team";

export const Home = () => {
  const customHandleOnClick = () => {
    console.log("Service Button clicked");
  };
  return (
    <>
      <HeroSection heroData={data.heroHome} />
      <div className="custom-bg-dark custom-border-bottom  container-fluid py-5">
        <div className="row g-3 justify-content-center">
          <h1 className="text-center color-primary">Services</h1>
          {data.services.map((service) => (
            <div key={service.id} className="col-12 col-md-6 col-lg-4">
              <div className="p-4">
                <Card
                  title={service.title}
                  icon={service.icon}
                  desc={service.description}
                >
                  {" "}
                  <Button
                    label="See more"
                    handleOnClick={customHandleOnClick}
                  ></Button>
                </Card>
              </div>
            </div>
            // <div key={service.id}  ">
            //   <ServiceCard service={service} />
            // </div>
          ))}
        </div>
      </div>
      <SectionOne sectionOne={data.section_one} />
      <SectionTwo sectionTwo={data.section_two} />
      <Slider />
      <div className="container my-5">
        <h2 className="text-center mb-4">Our leadership Team</h2>
        <p>
          Meet the leaders behind CGD’s mission to protect businesses from
          evolving cyber threats. With deep expertise in cybersecurity and IT
          consulting, our leadership team drives innovation and ensures the
          highest standards of security for our clients. Scroll down to see the
          faces behind our success.
        </p>

        <Team data={data.team} />
      </div>
      <div className="container my-5">
        <h2 className="text-center mb-4">Join our happy customers!</h2>
        <Testimonial />
      </div>

      <Footer />
    </>
  );
};
