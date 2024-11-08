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
  return (
    <section
      className=" hero-section"
      style={{ backgroundImage: `url(${heroData.bgImg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 hero-content">
            <p className="hero-pre-title">{heroData.preTitle}</p>
            <h1 className="hero-title">{heroData.title}</h1>
            <p className="hero-description">{heroData.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
