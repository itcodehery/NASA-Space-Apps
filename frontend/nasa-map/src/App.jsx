import { useState } from "react";
import FilterCard from "./components/FilterCard";
import AppBar from "./components/AppBar";
import Map from "./components/Map";
import Dashboard from "./components/Dashboard";

function App() {
  const [filters, setFilters] = useState({ CO2: true, CH4: false, CO: false });
  const [year, setYear] = useState(2020);
  const [selectedState, setSelectedState] = useState(null);
  const [currentView, setCurrentView] = useState("map"); // 'map' or 'dashboard'

  return (
    <div className="App h-screen w-screen flex flex-col">
      <AppBar currentView={currentView} setCurrentView={setCurrentView} />
      {currentView === "map" ? (
        <div className="relative flex-1 flex flex-col items-center justify-center">
          <Map filters={filters} year={year} selectedState={selectedState} />
          <FilterCard
            filters={filters}
            setFilters={setFilters}
            year={year}
            setYear={setYear}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
          />
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
