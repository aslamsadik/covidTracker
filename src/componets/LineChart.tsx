
// import Plot from 'react-plotly.js';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';

// const LineChart = () => {
//   const { totalCases, activeCases, recovered, deaths } = useSelector(
//     (state: RootState) => state.covid
//   );

//   const data = [
//     {
//       x: ['Day 1', 'Day 2', 'Day 3', 'Day 4'], // Sample days
//       y: [totalCases, totalCases + 1000, totalCases + 2000, totalCases + 3000],
//       type: 'scatter',
//       mode: 'lines+markers',
//       name: 'Total Cases',
//     },
//     {
//       x: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
//       y: [activeCases, activeCases + 200, activeCases + 400, activeCases + 600],
//       type: 'scatter',
//       mode: 'lines+markers',
//       name: 'Active Cases',
//     },
//     // Add more lines for Recovered and Deaths if needed
//   ];

//   return (
//     <div>
//       <Plot
//         data={data}
//         layout={{
//           title: 'COVID-19 Cases Over Time',
//           xaxis: { title: 'Days' },
//           yaxis: { title: 'Number of Cases' },
//         }}
//       />
//     </div>
//   );
// };

// export default LineChart;


// components/LineChart.tsx
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const LineChart = () => {
  const { dataByState, selectedState } = useSelector((state: RootState) => state.covid);
  const { totalCases, activeCases } = dataByState[selectedState];

  const data = [
    {
      x: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
      y: [totalCases, totalCases + 1000, totalCases + 2000, totalCases + 3000],
      type: 'scatter',
      mode: 'lines+markers',
      name: 'Total Cases',
    },
    {
      x: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
      y: [activeCases, activeCases + 200, activeCases + 400, activeCases + 600],
      type: 'scatter',
      mode: 'lines+markers',
      name: 'Active Cases',
    },
  ];

  return (
    <div>
      <Plot
        data={data}
        layout={{
          title: `COVID-19 Cases in ${selectedState}`,
          xaxis: { title: 'Days' },
          yaxis: { title: 'Number of Cases' },
        }}
      />
    </div>
  );
};

export default LineChart;
