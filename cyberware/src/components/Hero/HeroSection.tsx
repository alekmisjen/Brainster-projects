import { Button } from "../Button/Button";
import "./HeroStyle.css";

import { useTranslation } from "react-i18next";
interface HeroData {
  preTitle?: string;
  title: string;
  desc?: string;
  bgImg: string;
}
interface HeroProps {
  heroData: HeroData;
}

export const HeroSection = ({ heroData }: HeroProps) => {
  const { t } = useTranslation();
  const customHandleOnClick = () => {
    //console.log("Button clicked");
  };

  return (
    <section
      className=" hero-section custom-border-bottom position-relative"
      style={{ backgroundImage: `url(${heroData.bgImg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 hero-content">
            <p className="hero-pre-title">{t("heroHome.preTitle")}</p>
            <h1 className="hero-title">{t("heroHome.title")}</h1>
            <p className="hero-description">{t("heroHome.desc")}</p>
            <Button
              label="Get Started Today"
              handleOnClick={customHandleOnClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
