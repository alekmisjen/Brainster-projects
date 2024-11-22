import { Card } from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import { HeroSection } from "../components/Hero/HeroSection";

import data from "../db.json";
import "../components/style.css";
import { LocationSection } from "../components/Location/LocationSection";

import { TeamMemberSection } from "../components/Team/TeamMemberSection";

import Certificate from "../components/Certificate/Certificate";
import ClientTestimonial from "../components/Testimonial/ClientTestimonial";

export const About = () => {
  return (
    <>
      <HeroSection heroData={data.heroAbout} />
      <div className="" style={{ top: "calc(-5cm)" }}>
        <div className="custom-border-bottom  container ">
          <div className="row justify-content-center  ">
            {data.aboutCard.map((about) => (
              <div key={about.id} className="col-12 col-md-6 col-lg-5 g-3 ">
                <div className="mb-5" style={{ marginTop: "-50px" }}>
                  <Card
                    title={about.title}
                    icon={about.icon}
                    desc={about.description}
                  ></Card>
                </div>
              </div>
              // <div key={about.id}  ">
              //   <ServiceCard about={about} />
              // </div>
            ))}
          </div>
        </div>
      </div>
      <LocationSection sectionLocation={data.locationSection} />
      <TeamMemberSection />
      <Certificate />
      <ClientTestimonial />
      <Footer />
    </>
  );
};
