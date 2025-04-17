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

## 🧠 Optimization Techniques Used

## ✅ Lazy Loading 

- **React.lazy() + Suspense** is used to load components (`PieChart`, `LineChart`, `Map`, etc.) only when needed, improving initialload time.
- Components are dynamically imported in `App.tsx` like this:

---



