import { Button } from "../components/Button/Button";
import Content from "../components/Content";
import Footer from "../components/Footer/Footer";

import { ContactPage } from "../types/types";

export interface ContactProps {
  data: ContactPage;
}
export const Contact = ({ data }: ContactProps) => {
  return (
    <>
      <div className="container-fluid custom-bg-dark top ">
        <div className="  text-center py-5 text-white">
          {/* Hero Section */}
          {data.hero.map((hero, index) => (
            <section
              className="service-hero d-flex flex-column justify-content-center align-items-center"
              key={index}
            >
              <h3 className="">{hero.title}</h3>
            </section>
          ))}

          {/* Features Title */}
        </div>
        <section className="section mt-5">
          <div className="container">
            <div className="row align-items-center justify-content-center py-5 ">
              <div className="col-md-6 order-2 order-md-1 text-white">
                <h2 className="color-primary">{data.title}</h2>
                <h4 className="mb-5">{data.blockSection}</h4>
                <div className="mb-5">
                  <p>Email: {data.email}</p>
                  <p>Phone:{data.phone}</p>
                  <p>Address{data.address}</p>
                </div>
                <div className="col-lg-5">
                  <h5 className="mb-5">{data.subTitle}</h5>
                  <a href="#" className="text-color h5 d-block"></a>
                </div>
              </div>

              <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
                <Content />
                {/* <form
                  action="#"
                  className="color-white contact d-flex flex-column"
                >
                  <label htmlFor="name" className="form-label color-primary">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3 input"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name" className="form-label color-primary">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control mb-3  input"
                    id="mail"
                    name="mail"
                    placeholder="Your Email Address"
                  />
                  <label htmlFor="phone" className="form-label color-primary">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control mb-3  input"
                    id="phone"
                    name="phone"
                    placeholder="e.g., +1234567890"
                    required
                    pattern="^\+?[0-9\s\-]{7,15}$"
                  />
                  <label htmlFor="message" className="form-label color-primary">
                    Send us a Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control mb-3 input"
                    placeholder="Your Message"
                  />
                  <Button label="Submit" />
                </form> */}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
