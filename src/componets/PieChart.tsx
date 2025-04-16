
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const PieChart = () => {
  const { totalCases, activeCases, recovered, deaths } = useSelector(
    (state: RootState) => state.covid
  );

  const data = {
    labels: ['Active Cases', 'Recovered', 'Deaths'],
    values: [activeCases, recovered, deaths],
    type: 'pie',
  };

  return (
    <div>
      <Plot data={[data]} layout={{ title: 'COVID-19 Cases Distribution' }} />
      <h3>Total Cases: {totalCases}</h3>
      <Plot data={[data]} layout={{ title: 'COVID-19 Cases Distribution' }} />
    </div>
  );
};

export default PieChart;
