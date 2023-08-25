import { Marker, Popup } from "react-leaflet";
import L, { Icon, IconOptions } from "leaflet";
import markerIcon from "../utils/marker_icon.png";

interface Country {
  countryInfo: {
    _id: string;
    lat: number;
    long: number;
  };
  country: string;
  active: number;
  recovered: number;
  deaths: number;
}

interface WorldMapProps {
  countriesData: Country[];
}

const WorldMap: React.FC<WorldMapProps> = ({ countriesData }) => {
  const customMarker: Icon<IconOptions> = L.icon({
    iconUrl: markerIcon,
    iconSize: [20, 25],
    iconAnchor: [15, 30],
  });

  return (
    <div>
      {countriesData?.map((country) => (
        <Marker
          icon={customMarker}
          key={country.countryInfo._id}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{country.country}</h2>
              <div className="text-sm">
                <p className="mb-1">Active Cases: {country.active}</p>
                <p className="mb-1">Recovered Cases: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </div>
  );
};

export default WorldMap;
