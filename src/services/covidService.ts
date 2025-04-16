// services/covidService.ts
export const fetchCovidData = async () => {
    // Simulated API data by state
    return {
      All: {
        totalCases: 5000000,
        activeCases: 200000,
        recovered: 4700000,
        deaths: 100000,
      },
      Maharashtra: {
        totalCases: 1200000,
        activeCases: 50000,
        recovered: 1120000,
        deaths: 30000,
      },
      Kerala: {
        totalCases: 1000000,
        activeCases: 30000,
        recovered: 950000,
        deaths: 20000,
      },
      Delhi: {
        totalCases: 800000,
        activeCases: 20000,
        recovered: 760000,
        deaths: 20000,
      },
      Karnataka: {
        totalCases: 900000,
        activeCases: 40000,
        recovered: 840000,
        deaths: 20000,
      },
    };
  };
  

