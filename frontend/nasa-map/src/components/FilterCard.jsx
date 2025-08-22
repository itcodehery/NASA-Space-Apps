export default function FilterCard({ filters, setFilters, year, setYear }) {
  const gases = [
    { key: "CO2", label: "CO2" },
    { key: "CH4", label: "CH4" },
    { key: "CO", label: "CO" },
  ];

  // Find the currently selected gas
  const selectedGas = Object.keys(filters).find((key) => filters[key]);

  const handleGasChange = (gasKey) => {
    // Create new filters object with only the selected gas
    const newFilters = {};
    gases.forEach((gas) => {
      newFilters[gas.key] = gas.key === gasKey;
    });
    setFilters(newFilters);
  };

  return (
    <div
      className="fixed left-1/2 bottom-16 w-[50vw] h-[70px] bg-gray-900 text-white shadow-2xl flex items-center justify-center z-[1200] px-8 border border-gray-700"
      style={{ transform: "translateX(-50%)" }}
    >
      <div className="flex items-center justify-center w-full gap-8">
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold">Filters:</span>
          {gases.map((gas) => (
            <label
              key={gas.key}
              className="flex items-center gap-2 text-base font-medium"
            >
              <input
                type="radio"
                name="gas"
                checked={selectedGas === gas.key}
                onChange={() => handleGasChange(gas.key)}
                className="accent-gray-400 w-4 h-4"
              />
              {gas.label}
            </label>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold">Year:</span>
          <input
            type="range"
            min={2015}
            max={2020}
            step={1}
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="w-64 accent-gray-400"
          />
          <span className="text-base font-bold text-white">{year}</span>
        </div>
      </div>
    </div>
  );
}
