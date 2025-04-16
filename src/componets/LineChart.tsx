// Displays 7-day simulated trends for total cases, recovered, and deaths

import React from 'react';
import Plot from 'react-plotly.js';

interface Props {
  selectedState: string;
  covidData: any;
}

const LineChart: React.FC<Props> = ({ selectedState, covidData }) => {
  try {
    const stateData = covidData[selectedState];

    if (!stateData) {
      return <div>No data available for {selectedState}</div>;
    }

    const days = Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`);
    const growthRate = 1.01;

    const generateTrend = (base: number) =>
      days.map((_, i) => Math.round(base * Math.pow(growthRate, i)));

    const totalCases = generateTrend(stateData.totalCases * 0.8);
    const recovered = generateTrend(stateData.recovered * 0.8);
    const deaths = generateTrend(stateData.deaths * 0.8);

    const data = [
      {
        x: days,
        y: totalCases,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Total Cases',
      },
      {
        x: days,
        y: recovered,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Recovered',
      },
      {
        x: days,
        y: deaths,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Deaths',
      },
    ];

    return (
      <div>
        <Plot
          data={data}
          layout={{
            title: `COVID-19 Weekly Trend in ${selectedState}`,
            xaxis: { title: 'Day' },
            yaxis: { title: 'Number of Cases' },
          }}
        />
      </div>
    );
  } catch (error) {
    return <div style={{ color: 'red' }}>Error: {String(error)}</div>;
  }
};

export default LineChart;
