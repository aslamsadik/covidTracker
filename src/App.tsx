
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCovidData } from './store/covidSlice';
import { fetchCovidData } from './services/covidService';
import Dashboard from './componets/Dashboard';
import PieChart from './componets/PieChart';
import LineChart from './componets/LineChart';
import Map from './componets/Map';
import { RootState } from './store'; 
import './App.css';

function App() {
  const dispatch = useDispatch();

  const covidData = useSelector((state: RootState) => state.covid.dataByState); //select covid data
  const selectedState = useSelector((state: RootState) => state.covid.selectedState); //select selected state

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCovidData();
      dispatch(setCovidData(data));
    };
    getData();
  }, [dispatch]);

  return (
    <div className="App">
      <h1 >COVID Tracker Dashboard</h1>
      <Dashboard />
      <span>Pie Chart</span>
      <div className="visuals">
        <div className="chart-box">
          <PieChart />
        </div>
        <div className="chart-box">
          <LineChart covidData={covidData} selectedState={selectedState} />
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
