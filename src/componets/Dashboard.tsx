// components/Dashboard.tsx

// Dashboard displays key COVID statistics and provides state selection functionality
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setSelectedState } from '../store/covidSlice'; // Action creator from Redux slice

const Dashboard = () => {
  // Initialize Redux dispatch function to send actions to the store
  const dispatch = useDispatch();
  
  // Get the currently selected state from Redux store
  const selectedState = useSelector((state: RootState) => state.covid.selectedState);
  
  // Get COVID data for the selected state from Redux store
  const data = useSelector((state: RootState) => state.covid.dataByState[selectedState]);

  // Handler for state selection dropdown change
  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Dispatch action to update selected state in Redux store
    dispatch(setSelectedState(e.target.value));
  };

  return (
    <div className="dashboard">
      {/* Statistic cards section - displays key metrics */}
      <div className="stats-cards">
        {/* Total cases card */}
        <div className="card total">
          Total: {data.totalCases.toLocaleString()} {/* Format number with commas */}
        </div>
        
        {/* Active cases card */}
        <div className="card active">
          Active: {data.activeCases.toLocaleString()}
        </div>
        
        {/* Recovered cases card */}
        <div className="card recovered">
          Recovered: {data.recovered.toLocaleString()}
        </div>
        
        {/* Deaths card */}
        <div className="card deaths">
          Deaths: {data.deaths.toLocaleString()}
        </div>
      </div>

      {/* State filter dropdown */}
      <div className="filter" style={{ marginLeft: "40%" }}>
        <label htmlFor="state-select">Filter by State:</label>
        <select 
          id="state-select" 
          value={selectedState} // Controlled component - value comes from Redux
          onChange={handleStateChange} // Updates state on selection change
        >
          <option value="All">All</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Kerala">Kerala</option>
          <option value="Delhi">Delhi</option>
          <option value="Karnataka">Karnataka</option>
        </select>
      </div>
    </div>
  );
};

export default Dashboard;