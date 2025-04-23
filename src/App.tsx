// // Main entry with dashboard + chart components

// App.tsx - Optimized with Lazy Loading and Suspense

import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCovidData } from './store/covidSlice';
import { fetchCovidData } from './services/covidService';
import { RootState } from './store'; 
import './App.css';

// Lazy loaded components
const Dashboard = lazy(() => import('./componets/Dashboard'));
const PieChart = lazy(() => import('./componets/PieChart'));
const LineChart = lazy(() => import('./componets/LineChart'));
const Map = lazy(() => import('./componets/Map'));

function App() {
  const dispatch = useDispatch();

  const covidData = useSelector((state: RootState) => state.covid.dataByState);
  const selectedState = useSelector((state: RootState) => state.covid.selectedState);

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

      <Suspense fallback={<div>Loading Dashboard...</div>}>
        <Dashboard />
      </Suspense>
      
      <div className="visuals">
        <div className="chart-box">
          <span>Datas in chart </span>
          <Suspense fallback={<div>Loading Pie Chart...</div>}>
            <PieChart />
          </Suspense>
        </div>

        <div className="chart-box">
          <Suspense fallback={<div>Loading Line Chart...</div>}>
            <LineChart covidData={covidData} selectedState={selectedState} />
          </Suspense>
        </div>
      </div>

      <h1>Map</h1>
      <div className="chart-box">
        <Suspense fallback={<div>Loading Map...</div>}>
          <Map />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
