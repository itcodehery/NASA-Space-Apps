import MapView from "./components/MapView";
import FilterCard from "./components/FilterCard";
import AppBar from "./components/AppBar";
import Map from "./components/Map";

function App() {
  // const [filters, setFilters] = useState({ CO2: true, CH4: false, CO: false });

  return (
    <div className="App relative h-screen w-screen">
      <AppBar />
      {/* <div className="h-full w-full pt-16">
        <MapView filters={filters} />
      </div>
      <div className="pointer-events-auto" style={{ zIndex: 1000, position: 'absolute', bottom: '2rem', right: '2rem' }}>
        <FilterCard filters={filters} setFilters={setFilters} />
      </div> */}

      <Map />
    </div>
  );
}

export default App;
