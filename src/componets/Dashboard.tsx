// src/components/Dashboard.tsx
// import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="stats-cards">
        <div className="card total">Total: 00</div>
        <div className="card active">Active: 00</div>
        <div className="card recovered">Recovered: 00</div>
        <div className="card deaths">Deaths: 00</div>
      </div>

      <div className="chart-section">
        <div className="filter">
          <label htmlFor="state-select">Filter by State:</label>
          <select id="state-select">
            <option value="">All</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Kerala">Kerala</option>
            {/* Add more states dynamically later */}
          </select>
        </div>

        <div className="visuals">
          <div className="chart-box">[Pie Chart]</div>
          <div className="chart-box">[Line Chart]</div>
        </div>

        <div className="map-view">
          [Map View]
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
