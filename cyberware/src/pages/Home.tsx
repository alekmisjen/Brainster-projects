import { HeroSection } from "../Hero/HeroSection";
import heroData from "../db.json";

export const Home = () => {
  return (
    <>
      <div>
        <HeroSection heroData={heroData.heroSection} />
      </div>
    </>
  );
};
