// components/PieChart.tsx

// Donut chart showing active, recovered, and death distribution
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const PieChart = () => {
  const { dataByState, selectedState } = useSelector((state: RootState) => state.covid);
  const stateData = dataByState[selectedState];

  const data = [
    {
      values: [stateData.activeCases, stateData.recovered, stateData.deaths],
      labels: ['Active', 'Recovered', 'Deaths'],
      type: 'pie',
      hole: 0.4, // for donut style
      marker: {
        colors: ['#f39c12', '#2ecc71', '#e74c3c'],
      },
    },
  ];

  return (
    <div>
      <Plot
        data={data}
        layout={{
          title: `COVID-19 Case Distribution - ${selectedState}`,
          height: 400,
          width: 500,
        }}
      />
    </div>
  );
};

export default PieChart;
