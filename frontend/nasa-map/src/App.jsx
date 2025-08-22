import React, { useState } from "react";
import MapView from "./components/MapView";
import FilterCard from "./components/FilterCard";
import AppBar from "./components/AppBar";
import Map from "./components/Map";

function App() {
  const [filters, setFilters] = useState({ CO2: true, CH4: false, CO: false });
  const [year, setYear] = useState(2020);

  return (
    <div className="App relative h-screen w-screen flex flex-col items-center justify-center">
      <AppBar />
  <Map filters={filters} year={year} />
  <FilterCard filters={filters} setFilters={setFilters} year={year} setYear={setYear} />
    </div>
  );
}

export default App;
