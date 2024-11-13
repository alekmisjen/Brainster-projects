import { WhoWeAre } from "../../types/types";

interface SectionOneProps {
  sectionOne: WhoWeAre;
}
const SectionOne = ({ sectionOne }: SectionOneProps) => {
  return (
    <div className="section">
      <div className="container- fluid custom-bg-dark d-flex justify-content-center">
        <div className="row py-5  w-75  mx-auto text-center">
          <div className="  section-one">
            <h1 className=" color-primary">{sectionOne.title}</h1>
            <p className="mb-5  ">{sectionOne.content}</p>
          </div>
          <div className="d-flex justify-content-center gap-4 ">
            <div className="rec d-flex align-itens-center  p-3">
              <img
                src="./icons/icon1.png"
                width={50}
                height={50}
                className="me-3"
              />
              <div>
                <p className="text-white">
                  Trusted by over <br />
                  <span className="color-primary">100+ Organizations</span>
                </p>
              </div>
            </div>
            <div className="rec  d-flex align-itens-center p-3">
              <img
                src="./icons/icon2.png"
                width={50}
                height={50}
                className="me-3"
              />
              <div>
                <p className="text-white">
                  Accross <br />
                  <span className="color-primary">50+ Countries</span>
                </p>
              </div>
            </div>
            <div className="rec  d-flex align-itens-center  p-3">
              <img
                src="./icons/icon3.png"
                width={50}
                height={50}
                className="me-3"
              />
              <div>
                <p className="text-white">
                  Use 100%
                  <span className="ms-2 color-primary">
                    Innovative <br /> Technology
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionOne;
