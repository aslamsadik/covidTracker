import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CovidState {
  totalCases: number;
  activeCases: number;
  recovered: number;
  deaths: number;
}

const initialState: CovidState = {
  totalCases: 0,
  activeCases: 0,
  recovered: 0,
  deaths: 0,
};

const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    setCovidData: (state, action: PayloadAction<CovidState>) => {
      state.totalCases = action.payload.totalCases;
      state.activeCases = action.payload.activeCases;
      state.recovered = action.payload.recovered;
      state.deaths = action.payload.deaths;
    },
  },
});

export const { setCovidData } = covidSlice.actions;
export default covidSlice.reducer;
