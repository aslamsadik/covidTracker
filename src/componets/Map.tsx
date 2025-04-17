// Leaflet map showing static marker with popup data

// components/Map.tsx

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../store';
import L from 'leaflet';
import { memo } from 'react';

const Map = () => {
  const { totalCases, activeCases, recovered, deaths } = useSelector(
    (state: RootState) => ({
      totalCases: state.covid.totalCases,
      activeCases: state.covid.activeCases,
      recovered: state.covid.recovered,
      deaths: state.covid.deaths,
    }),
    shallowEqual
  );

  const position: [number, number] = [20.5937, 78.9629]; // Center of India

  const icon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Location_dot_red.png',
    iconSize: [5, 5],
  });

  return (
    <MapContainer
      center={position}
      zoom={5}
      style={{ width: '20%', height: '10%', marginLeft: '5%', marginTop: '5%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={icon}>
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

export default memo(Map);

