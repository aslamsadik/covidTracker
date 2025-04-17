
// components/PieChart.tsx

import Plot from 'react-plotly.js';
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../store';
import { memo, useMemo } from 'react';

const PieChart = () => {
  const { dataByState, selectedState } = useSelector(
    (state: RootState) => ({
      dataByState: state.covid.dataByState,
      selectedState: state.covid.selectedState,
    }),
    shallowEqual
  );

  const stateData = dataByState[selectedState];

  const chartData = useMemo(() => {
    return [
      {
        values: [stateData.activeCases, stateData.recovered, stateData.deaths],
        labels: ['Active', 'Recovered', 'Deaths'],
        type: 'pie',
        hole: 0.4,
        marker: {
          colors: ['#f39c12', '#2ecc71', '#e74c3c'],
        },
      },
    ];
  }, [stateData]);

  return (
    <div>
      <Plot
        data={chartData}
        layout={{
          title: `COVID-19 Case Distribution - ${selectedState}`,
          height: 400,
          width: 500,
        }}
      />
    </div>
  );
};

export default memo(PieChart);
