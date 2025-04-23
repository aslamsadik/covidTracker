// Import Plotly.js React component for creating interactive charts
import Plot from 'react-plotly.js';
// Import Redux hooks to access the store
import { useSelector, shallowEqual } from 'react-redux';
// Import type definition for the Redux store
import { RootState } from '../store';
// Import React hooks for memoization and performance optimization
import { memo, useMemo } from 'react';

// Define the PieChart component
const PieChart = () => {
  // Use useSelector hook to extract COVID data by state and selected state from Redux store
  // shallowEqual prevents unnecessary re-renders when unrelated state changes
  const { dataByState, selectedState } = useSelector(
    (state: RootState) => ({
      dataByState: state.covid.dataByState, // Object containing COVID data for all states
      selectedState: state.covid.selectedState, // Currently selected state
    }),
    shallowEqual
  );

  // Get the COVID data for the currently selected state
  const stateData = dataByState[selectedState];

  // Memoize the chart data configuration to optimize performance
  // This will only recalculate when stateData changes
  const chartData = useMemo(() => {
    return [
      {
        values: [stateData.activeCases, stateData.recovered, stateData.deaths],
        labels: ['Active', 'Recovered', 'Deaths'],
        type: 'pie', // Specifies this is a pie chart
        hole: 0.4, // Creates a donut chart (0 would be solid pie)
        marker: {
          colors: ['#f39c12', '#2ecc71', '#e74c3c'], // Orange, Green, Red
        },
      },
    ];
  }, [stateData]); // Dependency array - only recompute when stateData changes

  // Render the Plotly chart component
  return (
    <div>
      <Plot
        data={chartData} // Pass the memoized chart data configuration
        layout={{
          title: `COVID-19 Case Distribution - ${selectedState}`,
          height: 400, // Fixed height of the chart
          width: 500, // Fixed width of the chart
        }}
      />
    </div>
  );
};

// Export the component wrapped in memo to prevent unnecessary re-renders
export default memo(PieChart);