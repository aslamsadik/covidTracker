
// import Plot from 'react-plotly.js';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';

// const PieChart = () => {
//   const { totalCases, activeCases, recovered, deaths } = useSelector(
//     (state: RootState) => state.covid
//   );

//   const data = {
//     labels: ['Active Cases', 'Recovered', 'Deaths'],
//     values: [activeCases, recovered, deaths],
//     type: 'pie',
//   };

//   return (
//     <div>
//       <h3>Total Cases: {totalCases}</h3>
//       <Plot data={[data]} layout={{ title: 'COVID-19 Cases Distribution' }} />
//     </div>
//   );
// };

// export default PieChart;

// components/PieChart.tsx
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
