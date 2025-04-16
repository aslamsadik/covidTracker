import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import L from 'leaflet';

const Map = () => {
  const { totalCases, activeCases, recovered, deaths } = useSelector(
    (state: RootState) => state.covid
  );

  const position = [20.5937, 78.9629]; // Center of India (lat, lon)

  return (
    <MapContainer center={position} zoom={5} style={{ width: '20%', height: '10%', marginLeft:'5%', marginTop:'5%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={L.icon({ iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Location_dot_red.png', iconSize: [5, 5] })}>
        <Popup>
          <h4>COVID Data</h4>
          <p>Total Cases: {totalCases}</p>
          <p>Active Cases: {activeCases}</p>
          <p>Recovered: {recovered}</p>
          <p>Deaths: {deaths}</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
