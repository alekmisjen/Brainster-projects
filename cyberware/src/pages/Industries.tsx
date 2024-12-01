import { Button } from "../components/Button/Button";
import Footer from "../components/Footer/Footer";

import { IndustriesPage } from "../types/types";

export interface IndustriesProps {
  data: IndustriesPage;
}
export const Industries = ({ data }: IndustriesProps) => {
  return (
    <>
      <div className=" services  text-center">
        {/* Hero Section */}
        {data.hero.map((hero, index) => (
          <section
            className="service-hero d-flex flex-column justify-content-center align-items-center"
            key={index}
            style={{
              backgroundImage: `url(${hero.bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "300px",
              color: "white",
            }}
          >
            <h1 className="">{hero.title}</h1>
            <p className="px-2"> {hero.subTitle}</p>
          </section>
        ))}

        {/* Features Title */}

        {/* Features Cards */}
        <div className="container mt-3">
          <div className="row align-items-stretch g-3 ">
            {data.card.map((card, index) => (
              <div className="col-lg-12 col-md-12 my-4 " key={index}>
                <div className="card-siem h-100 custom-bg-dark custom-border-bottom text-white">
                  <div className="card-body  py-3">
                    <div className="card-title">
                      <img src={card.icon} alt="" className="m-2" />
                      <h3 className="">{card.title}</h3>
                    </div>
                    <p className=" m-5 text-justify">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="section mt-5 mb-5">
        <div className="container">
          <div className="row align-items-center justify-content-center py-5 ">
            <div className="col-md-6 order-2 order-md-1">
              <h2>{data.title}</h2>
              <h4 className="color-primary">{data.blockSection}</h4>
            </div>
            <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0 section-email">
              <form action="#" className="d-flex flex-column align-items-end">
                <input
                  type="email"
                  className="form-control mb-3"
                  id="mail"
                  name="mail"
                  placeholder="Your Email"
                />

                <Button label="Join for free" />
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
