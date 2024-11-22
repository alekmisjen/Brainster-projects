import { NavLink } from "react-router-dom";
import { TopHeader } from "./TopHeader";

import { useTranslation } from "react-i18next";

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
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link px-3 nav-link-active"
                      : " nav-link px-3 text-white"
                  }
                >
                  Services
                </NavLink>{" "}
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
