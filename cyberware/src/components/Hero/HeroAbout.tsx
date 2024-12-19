import "./HeroStyle.css";
import { useTranslation } from "react-i18next";

interface HeroData {
  title?: string;
  bgImg: string;
}
interface HeroProps {
  heroData: HeroData;
}

export const HeroAbout: React.FC<HeroProps> = ({ heroData }) => {
  const { t } = useTranslation();

  // Get the translated title and split it into words
  const fullTitle: string = t("heroAbout.title") || "";
  const titleWords = fullTitle.split(" ");

  // Extract parts of the title
  const firstWord = titleWords[0];
  const lastWord =
    titleWords.length > 1 ? titleWords[titleWords.length - 1] : null;
  const middleWords = titleWords.slice(1, -1).join(" ");

  return (
    <section
      className="hero-section custom-border-bottom position-relative"
      style={{ backgroundImage: `url(${heroData.bgImg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 hero-content position-relative">
            <h2 className="hero-title">
              {firstWord && <span className="color-primary">{firstWord}</span>}{" "}
              {middleWords && <span>{middleWords}</span>}{" "}
              {lastWord && <span className="color-primary">{lastWord}</span>}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
