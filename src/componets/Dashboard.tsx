
// components/Dashboard.tsx
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setSelectedState } from '../store/covidSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const selectedState = useSelector((state: RootState) => state.covid.selectedState);
  const data = useSelector((state: RootState) => state.covid.dataByState[selectedState]);

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedState(e.target.value));
  };

  return (
    <div className="dashboard">
      <div className="stats-cards">
        <div className="card total">Total: {data.totalCases.toLocaleString()}</div>
        <div className="card active">Active: {data.activeCases.toLocaleString()}</div>
        <div className="card recovered">Recovered: {data.recovered.toLocaleString()}</div>
        <div className="card deaths">Deaths: {data.deaths.toLocaleString()}</div>
      </div>

      <div className="filter">
        <label htmlFor="state-select">Filter by State:</label>
        <select id="state-select" value={selectedState} onChange={handleStateChange}>
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


