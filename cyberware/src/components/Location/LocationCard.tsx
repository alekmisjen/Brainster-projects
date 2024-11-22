interface LocationCardProps {
  country: string;
  city: string;
  address: string;
  postalCode: string;
  icon: string;
}
const LocationCard = ({
  country,
  city,
  address,
  postalCode,
  icon,
}: LocationCardProps) => (
  <div className="col-lg-3 col-md-6 mt-4 mb-5">
    <div className="location-card">
      <div className="card-body">
        <h5 className="card-title">{country}</h5>
        <img src={icon} alt={`${city} icon`} className="m-2" />
        <p className="card-text m-2">
          <span>{address}</span>
          <br />
          <span> {city}</span>
          <br />
          <span>{postalCode}</span>
        </p>
      </div>
    </div>
  </div>
);

export default LocationCard;
