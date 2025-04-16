
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setCovidData } from './store/covidSlice';
// import { fetchCovidData } from './services/covidService';
// import Dashboard from './componets/Dashboard';
// import PieChart from './componets/PieChart';
// import LineChart from './componets/LineChart';
// import Map from './componets/Map';
// import './App.css';

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const getData = async () => {
//       const data = await fetchCovidData();
//       dispatch(setCovidData(data)); // Dispatch data to Redux store
//     };

//     getData();
//   }, [dispatch]);

//   return (
//     <div className="App">
//       <h1>COVID Tracker Dashboard</h1>
//       <Dashboard/>
//       <PieChart />
//       <LineChart />
//       <h1>Map</h1>
//       <Map />
//     </div>
//   );
// }

// export default App;


import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCovidData } from './store/covidSlice';
import { fetchCovidData } from './services/covidService';
import Dashboard from './componets/Dashboard';
import PieChart from './componets/PieChart';
import LineChart from './componets/LineChart';
import Map from './componets/Map';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCovidData();
      dispatch(setCovidData(data));
    };
    getData();
  }, [dispatch]);
  

  return (
    <div className="App">
      <h1>COVID Tracker Dashboard</h1>
      <Dashboard />
      <div className="visuals">
        <div className="chart-box">
          <PieChart />
        </div>
        <div className="chart-box">
          <LineChart />
        </div>
      </div>
      <h1>Map</h1>
      <div className="chart-box">
        <Map />
      </div>
    </div>
  );
}

export default App;
