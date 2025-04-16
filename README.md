# COVID Tracker Dashboard

A dynamic and interactive dashboard to visualize COVID-19 data in India. This project uses **React**, **Redux**, **React-Leaflet**, and **Plotly.js** to display a real-time and state-wise breakdown of cases in India.

## Features

- 📊 **Dashboard View**: Overview of total, active, recovered, and death cases.
- 🌍 **Interactive Map**: Shows COVID-19 stats on India's geographical location using Leaflet.
- 🥧 **Pie Chart**: Displays the case distribution (active, recovered, deaths) for selected states.
- 📈 **Line Chart**: Visualize trends (placeholder for enhancement).
- 📦 **Redux** for state management.
- 🧠 Modular and component-based structure.

## Tech Stack

- **Frontend**: React, TypeScript
- **Charts**: Plotly.js
- **Maps**: React-Leaflet
- **State Management**: Redux Toolkit
- **Styling**: CSS3

---

## Folder Structure

```
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx
│   │   ├── PieChart.tsx
│   │   ├── LineChart.tsx
│   │   └── Map.tsx
│   ├── services/
│   │   └── covidService.ts
│   ├── store/
│   │   ├── covidSlice.ts
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   └── index.tsx
```

---

## Component Overview

### 📍 Map.tsx
Displays a Leaflet map centered on India with a popup showing:
- Total Cases
- Active Cases
- Recovered
- Deaths

### 🥧 PieChart.tsx
Uses Plotly to show case distribution by state in donut format.
- Color-coded segments
- Updates on state change

### 📋 Dashboard.tsx
Displays numeric stats in cards:
- Total, Active, Recovered, Deaths
- Dropdown to filter by state

### 🧠 App.tsx
- Fetches and dispatches COVID data
- Renders all components: Dashboard, Pie Chart, Line Chart, Map

---

## Installation

```bash
git clone https://github.com/your-username/covid-dashboard.git
cd covid-dashboard
npm install
npm start
```

---

## Suggestions to Impress ✅

### 💡 Code Refactoring:
1. **Component Reusability**: Extract card component from Dashboard.
2. **Responsiveness**: Make `MapContainer` responsive with `%` based height or `vh`.
3. **Chart Legends**: Add `legend` or hover info on pie chart.
4. **Line Chart Enhancement**: Add dummy or real trend data if available.

### 🧼 Code Cleanliness:
- Use `const position: [number, number] = [20.5937, 78.9629]` for strong typing.
- Avoid inline styles if possible, move to `.css`.
- Add fallback values in PieChart in case `stateData` is undefined.

```ts
if (!stateData) return <div>No data available for selected state</div>;
```

### 💄 Styling Touch:
- Add a smooth hover effect on cards.
- Animate chart transitions.
- Add a light fade animation when components mount.

---

## Acknowledgements
- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Leaflet](https://leafletjs.com/)
- [Plotly.js](https://plotly.com/javascript/)
- [OpenStreetMap](https://www.openstreetmap.org/)

---

## License

This project is open-source and available under the [MIT License](LICENSE).