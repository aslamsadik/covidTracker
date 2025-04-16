// store/covidSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CovidState {
  dataByState: Record<string, { totalCases: number; activeCases: number; recovered: number; deaths: number }>;
  selectedState: string;
}

const initialState: CovidState = {
  dataByState: {
    All: {
      totalCases: 5000000,
      activeCases: 200000,
      recovered: 4700000,
      deaths: 100000,
    },
  },
  selectedState: 'All',
};

const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    setCovidData: (state, action: PayloadAction<CovidState['dataByState']>) => {
      state.dataByState = action.payload;
    },
    setSelectedState: (state, action: PayloadAction<string>) => {
      state.selectedState = action.payload;
    },
  },
});

export const { setCovidData, setSelectedState } = covidSlice.actions;
export default covidSlice.reducer;
