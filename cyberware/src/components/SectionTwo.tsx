import { VideoSection } from "../types/types";
import { Button } from "./Button/Button";

interface SectionTwoProps {
  sectionTwo: VideoSection;
}

const SectionTwo = ({ sectionTwo }: SectionTwoProps) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-center py-5">
          <div className="col-md-6 order-2 order-md-1">
            <h1 className="color-primary">{sectionTwo.title}</h1>
            <div className="d-flex justify-content-left gap-4   flex-column flex-md-row">
              <Button
                label="Expore our services"
                handleOnClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
                size="large"
                transparent={true}
                color="#FF6F0F"
              />
              <Button
                label="Book a demo"
                handleOnClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
                size="large"
              />
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
            <img
              className="img-fluid w-100 custom-border-bottom"
              src={sectionTwo.image}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
