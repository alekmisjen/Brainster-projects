import { sectionThree } from "../types/types";
import { Button } from "./Button/Button";

interface SectionProps {
  data: sectionThree;
}

export const SectionThree = ({ data }: SectionProps) => {
  return (
    <section className="section mt-5 mb-5">
      <div className="container">
        <div className="row align-items-center justify-content-center py-5 ">
          <div className="col-md-6 order-2 order-md-1">
            <h4 className="color-primary">{data.content}</h4>
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
  );
};
