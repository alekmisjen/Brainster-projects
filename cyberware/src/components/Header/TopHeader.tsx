import { Link } from "react-router-dom";
import "./Header.css";
import { GlobeIcon } from "../../assets/icons/GlobeIcon";
import { useState } from "react";
import { DropdownButton } from "../DropdownButton/DropdownButton";

export const TopHeader = () => {
  const [language, setLanguage] = useState<string>("en");

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };
  return (
    <div className="header__top py-2 bg-white">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-4 col-md-4 text-lg-left">
            <div className="header__top__left">
              <Link to="/" className="navbar-brand">
                <img src="/images/cyberware-logo.png" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 text-lg-right">
            <div className="header__top__right">
              <div className=" d-flex  align-items-center justify-content-end">
                <Link to="#" className="me-5">
                  Emergency Response Plan
                </Link>
                <Link to="#" className="me-2">
                  Support<i className="fas fa-chevron-down ms-2"></i>
                </Link>

                <DropdownButton
                  label={language}
                  icon={<GlobeIcon />}
                  onLanguageChange={handleLanguageChange}
                  currentLanguage={language}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
