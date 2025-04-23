// Leaflet map showing static marker with popup data

// Import necessary components from react-leaflet for map functionality
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// Import Redux hooks to access the store
import { useSelector, shallowEqual } from 'react-redux';
// Import type definition for the Redux store
import { RootState } from '../store';
// Import Leaflet library for map operations
import L from 'leaflet';
// Import React memo for performance optimization
import { memo } from 'react';

// Define the Map component
const Map = () => {
  // Use useSelector hook to extract COVID data from Redux store
  // shallowEqual prevents unnecessary re-renders when unrelated state changes
  const { totalCases, activeCases, recovered, deaths } = useSelector(
    (state: RootState) => ({
      totalCases: state.covid.totalCases,
      activeCases: state.covid.activeCases,
      recovered: state.covid.recovered,
      deaths: state.covid.deaths,
    }),
    shallowEqual
  );

  // Set the map's center position to India's coordinates
  const position: [number, number] = [20.5937, 78.9629]; // Latitude and longitude of India's center

  // Create a custom marker icon using Leaflet's L.icon
  const icon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Location_dot_red.png',
    iconSize: [5, 5], // Set the size of the icon (width, height in pixels)
  });

  // Render the map component
  return (
    // MapContainer sets up the base map with initial view settings
    <MapContainer
      center={position} // Initial map center
      zoom={5} // Initial zoom level (1-18, where 1 is world view)
      style={{ 
        width: '20%', 
        height: '10%', 
        marginLeft: '5%', 
        marginTop: '5%' 
      }} // Inline styles for the map container
    >
      {/* TileLayer adds the base map tiles from OpenStreetMap */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {/* Marker places a clickable pin on the map at the specified position */}
      <Marker position={position} icon={icon}>
        {/* Popup shows information when marker is clicked */}
        <Popup>
          <h4>COVID Data</h4>
          {/* Display COVID statistics from Redux store */}
          <p>Total Cases: {totalCases}</p>
          <p>Active Cases: {activeCases}</p>
          <p>Recovered: {recovered}</p>
          <p>Deaths: {deaths}</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

// Export the component wrapped in memo to prevent unnecessary re-renders
export default memo(Map);