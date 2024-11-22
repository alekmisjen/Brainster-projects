import { CertificateCard } from "../../types/types";
import data from "../../db.json";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";

const Certificate = () => {
  const certificate: CertificateCard[] = data.certificate;
  return (
    <div className="custom-bg-dark  container-fluid py-5">
      <div className="row g-3 justify-content-center align-items-center">
        <h1 className="text-center text-light">Our certifications</h1>
        {certificate.map((service, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 ">
            <div className="p-2">
              <Card
                title={service.title}
                icon={service.icon}
                desc={service.description}
                style={{
                  textAlign: "center",
                  width: "80%",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button label="See more"></Button>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
