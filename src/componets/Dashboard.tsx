// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <div className="stats-cards">
//         <div className="card total">Total: 00</div>
//         <div className="card active">Active: 00</div>
//         <div className="card recovered">Recovered: 00</div>
//         <div className="card deaths">Deaths: 00</div>
//       </div>

//       <div className="chart-section">
//         <div className="filter">
//           <label htmlFor="state-select">Filter by State:</label>
//           <select id="state-select">
//             <option value="">All</option>
//             <option value="Maharashtra">Maharashtra</option>
//             <option value="Kerala">Kerala</option>
//             {}
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// src/components/Dashboard.tsx
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useState } from 'react';

const Dashboard = () => {
  const { totalCases, activeCases, recovered, deaths } = useSelector(
    (state: RootState) => state.covid
  );

  const [selectedState, setSelectedState] = useState('');

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    // You can add more logic here if using a real API or filter data per state
  };

  return (
    <div className="dashboard">
      <div className="stats-cards">
        <div className="card total">Total: {totalCases.toLocaleString()}</div>
        <div className="card active">Active: {activeCases.toLocaleString()}</div>
        <div className="card recovered">Recovered: {recovered.toLocaleString()}</div>
        <div className="card deaths">Deaths: {deaths.toLocaleString()}</div>
      </div>

      <div className="filter">
        <label htmlFor="state-select">Filter by State:</label>
        <select id="state-select" value={selectedState} onChange={handleStateChange}>
          <option value="">All</option>
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


