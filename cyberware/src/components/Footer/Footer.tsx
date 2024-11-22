import React from "react";
import "./styles.css";
import { Form } from "../Form/Form";

const Footer: React.FC = () => {
  return (
    <div className="container-fluid bg-dark  footer mt-5 pt-5 px-0">
      <div className="row mx-auto ms-5">
        {/* Left Section */}
        <div className="col-lg-2 col-md-6 me-3 footer-section footer-logo">
          <img
            src="/images/cyberware-logo.png"
            alt="logo"
            style={{ maxWidth: "150px" }}
            className="mb-3"
          />
          <div>
            <img
              src="/images/footerImg1.png"
              alt=""
              className="img-fluid me-3"
              style={{ maxWidth: "70px" }}
            />
            <img
              src="/images/footerImg2.png"
              alt=""
              style={{ maxWidth: "70px" }}
            />
          </div>
          <img
            src="/images/footerImg4.png"
            alt=""
            className="mt-3"
            style={{ maxWidth: "150px" }}
          />
        </div>

        {/* Middle Section with 3 Subsections */}
        <div className="col-lg-2 col-md-12 text-white ">
          {/* Subsection 1 */}
          <h6>Services</h6>
          <ul className="list-unstyled">
            <li>
              <a href="#">SIEM - 24/7 Threat Monitoring</a>
            </li>
            <li>
              <a href="#">Penetration Testing</a>
            </li>
            <li>
              <a href="#">Incident Management</a>
            </li>
            <li>
              <a href="#">Compliance & Risk</a>
            </li>
            <li>
              <a href="#">Security Awareness Training</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-2   text-white footer-section">
          <h5>About Us</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#">Mission Statement</a>
            </li>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Our Expertise</a>
            </li>
            <li>
              <a href="#">Partnerships</a>
            </li>
          </ul>
          <h5>Our Values</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#">Innovation</a>
            </li>
            <li>
              <a href="#">Trust</a>
            </li>
            <li>
              <a href="#">Excellence</a>
            </li>
            <li>
              <a href="#">Collaboration</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-1 text-white footer-section">
          <h5>Team</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#">Mission Statement</a>
            </li>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Our Expertise</a>
            </li>
            <li>
              <a href="#">Partnerships</a>
            </li>
          </ul>
          <h5>Industrie we serve</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#">Innovation</a>
            </li>
            <li>
              <a href="#">Trust</a>
            </li>
            <li>
              <a href="#">Excellence</a>
            </li>
            <li>
              <a href="#">Collaboration</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 mb-4 form">
          <h5>Contact Us</h5>
          <Form />
        </div>
        <div className="text-center mt-4">
          <small>
            © Cyberware Global Defense. All Rights Reserved. |{" "}
            <a href="#">Legal Notice</a> | <a href="#">Data Protection</a> |{" "}
            <a href="#">Terms of Use</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
