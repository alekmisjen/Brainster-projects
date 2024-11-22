import { LocationSectionData } from "../../types/types";
import LocationCard from "./LocationCard";

export interface LocationSectionProps {
  sectionLocation: LocationSectionData;
}
export const LocationSection = ({ sectionLocation }: LocationSectionProps) => {
  const { bgImg, title, locations } = sectionLocation;
  return (
    <section
      className=" hero-section"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container">
        <h1 className="text-white">{title}</h1>
        <div className="container">
          <div className="row justify-content-center">
            {locations.map((location, index) => (
              <LocationCard key={index} {...location} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
