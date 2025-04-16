
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCovidData } from './store/covidSlice';
import { fetchCovidData } from './services/covidService';
import PieChart from './componets/PieChart';
import LineChart from './componets/LineChart';
import Map from './componets/Map';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCovidData();
      dispatch(setCovidData(data)); // Dispatch data to Redux store
    };

    getData();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>COVID Tracker Dashboard</h1>
      <PieChart />
      <LineChart />
      <Map />
    </div>
  );
}

export default App;
