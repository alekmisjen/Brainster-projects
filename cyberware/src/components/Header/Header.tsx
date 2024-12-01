import { Link, NavLink } from "react-router-dom";
import { TopHeader } from "./TopHeader";

import { useTranslation } from "react-i18next";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { SIEM } from "../../assets/icons/SIEM";
import { Button } from "../Button/Button";

import { PT } from "../../assets/icons/PT";
import { RightArrowIcon } from "../../assets/icons/Arrow";

// Handler for language selection

// const customHandleOnClick = () => {
//   console.log("Button was clicked");
// };
const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className="fixed-top header nav-bg">
      <TopHeader />
      {/* <!-- navbar --> */}
      <div className="custom-bg-dark w-100 ">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto py-2 justify-content-center mb-md-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link px-2 nav-link-active"
                      : "nav-link px-2  text-white"
                  }
                >
                  {t("Home")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link px-3 nav-link-active "
                      : "nav-link px-3 text-white"
                  }
                >
                  {t("About")}
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white px-3"
                  to="/services"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("Services")}
                </Link>
                <div className="dropdown-menu">
                  <div className="d-flex flex-row gap-2">
                    {/* SIEM Section */}
                    <div className="col-6 p-3  ">
                      <SIEM />
                      <small>
                        <strong className="d-block py-2">
                          SIEM Threat Detection & Response
                        </strong>
                      </small>
                      <hr />
                      <small>
                        Our 24/7 monitoring services use AI-powered tools to
                        detect and neutralize threats before they can harm your
                        business.
                      </small>
                      <Link to="services/service1" className="button">
                        Siem
                      </Link>
                      <hr />
                      <small>Define Security Goals</small>
                      <hr />
                      <small>Select a SIEM Tool</small>
                      <hr />
                      <small>Define Security Goals</small>
                      <hr />
                      <small>Define Security Goals</small>
                      <hr />
                      <small>Define Security Goals</small>
                      <hr />
                    </div>

                    {/* Penetration Testing Section */}
                    <div className="col-6 p-3 ">
                      <PT />
                      <small>
                        <strong className="d-block py-2">
                          Penetration Testing
                        </strong>
                      </small>
                      <hr />
                      <small>
                        Identify and eliminate vulnerabilities in your network
                        with our comprehensive penetration testing services.
                      </small>
                      <Link to="services/service2" className="button"></Link>
                      <hr />
                      <small>Pre-Engagement Interactions</small>
                      <hr />
                      <small>Reconnaissance</small>
                      <hr />
                      <small>Scanning</small>
                      <hr />
                      <small>Vulnerability Assessment</small>
                      <hr />
                      <small>Exploitation</small>
                      <hr />
                      <small>Post-Exploitation</small>
                      <hr />
                    </div>

                    {/* Support Section */}
                    <div className="col-6 p-3">
                      <PT />
                      <small>
                        <strong className="d-block py-2">
                          Penetration Testing
                        </strong>
                      </small>
                      <hr />
                      <small>
                        Identify and eliminate vulnerabilities in your network
                        with our comprehensive penetration testing services.
                      </small>
                      <hr />
                      <small>Pre-Engagement Interactions</small>
                      <hr />
                      <small>Reconnaissance</small>
                      <hr />
                      <small>Scanning</small>
                      <hr />
                      <small>Vulnerability Assessment</small>
                      <hr />
                      <small>Exploitation</small>
                      <hr />
                      <small>Post-Exploitation</small>
                      <hr />
                      <Button
                        label="Penetration Testing"
                        icon={<RightArrowIcon />}
                      />
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/industries"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link px-3 nav-link-active"
                      : "nav-link px-3 text-white"
                  }
                >
                  Industries
                </NavLink>{" "}
              </li>
              <li className="nav-item">
                <NavLink
                  to="/partnership"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link px-3 nav-link-active"
                      : "nav-link px-3 text-white"
                  }
                >
                  Partherships
                </NavLink>
              </li>
            </ul>

            <div className="text-end">
              <ul className="nav col-12 col-lg-auto me-lg-auto justify-content-center mb-md-0">
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link px-4 nav-link-active"
                        : "nav-link px-4 text-white"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/jobs"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link px-4 nav-link-active"
                        : "nav-link px-4 text-white"
                    }
                  >
                    Jobs
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/newsletter"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link px-3 nav-link-active"
                        : "nav-link px-3 text-white"
                    }
                  >
                    Newsletter
                  </NavLink>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
