import { Button } from "../Button/Button";
import "./HeroStyle.css";
interface HeroData {
  preTitle: string;
  title: string;
  desc: string;
  bgImg: string;
}
interface HeroProps {
  heroData: HeroData;
}

export const HeroSection = ({ heroData }: HeroProps) => {
  const customHandleOnClick = () => {
    console.log("Button clicked");
  };

  return (
    <section
      className=" hero-section custom-border-bottom "
      style={{ backgroundImage: `url(${heroData.bgImg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 hero-content">
            <p className="hero-pre-title">{heroData.preTitle}</p>
            <h1 className="hero-title">{heroData.title}</h1>
            <p className="hero-description">{heroData.desc}</p>
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
