import { FiFilter, FiCalendar, FiMapPin } from "react-icons/fi";

export default function FilterCard({
  filters,
  setFilters,
  year,
  setYear,
  selectedState,
  setSelectedState,
}) {
  const gases = [
    {
      key: "CO2",
      label: "CO₂",
      color: "#ef4444",
      hoverColor: "hover:bg-red-500/20",
    },
    {
      key: "CH4",
      label: "CH₄",
      color: "#f59e0b",
      hoverColor: "hover:bg-amber-500/20",
    },
    {
      key: "N2O",
      label: "N₂O",
      color: "#6b7280",
      hoverColor: "hover:bg-gray-500/20",
    },
    {
      key: "TOTAL", // FIX: Changed "Total" to "TOTAL" to match state
      label: "Total GHG",
      color: "#a855f7", // FIX: violet-500 (to match map)
      hoverColor: "hover:bg-violet-500/20",
    },
  ];

  const states = [
    { key: "ALL", label: "All States" },
    { key: "AL", label: "Alabama" },
    { key: "AK", label: "Alaska" },
    { key: "AZ", label: "Arizona" },
    { key: "AR", label: "Arkansas" },
    { key: "CA", label: "California" },
    { key: "CO", label: "Colorado" },
    { key: "CT", label: "Connecticut" },
    { key: "DE", label: "Delaware" },
    { key: "FL", label: "Florida" },
    { key: "GA", label: "Georgia" },
    { key: "HI", label: "Hawaii" },
    { key: "ID", label: "Idaho" },
    { key: "IL", label: "Illinois" },
    { key: "IN", label: "Indiana" },
    { key: "IA", label: "Iowa" },
    { key: "KS", label: "Kansas" },
    { key: "KY", label: "Kentucky" },
    { key: "LA", label: "Louisiana" },
    { key: "ME", label: "Maine" },
    { key: "MD", label: "Maryland" },
    { key: "MA", label: "Massachusetts" },
    { key: "MI", label: "Michigan" },
    { key: "MN", label: "Minnesota" },
    { key: "MS", label: "Mississippi" },
    { key: "MO", label: "Missouri" },
    { key: "MT", label: "Montana" },
    { key: "NE", label: "Nebraska" },
    { key: "NV", label: "Nevada" },
    { key: "NH", label: "New Hampshire" },
    { key: "NJ", label: "New Jersey" },
    { key: "NM", label: "New Mexico" },
    { key: "NY", label: "New York" },
    { key: "NC", label: "North Carolina" },
    { key: "ND", label: "North Dakota" },
    { key: "OH", label: "Ohio" },
    { key: "OK", label: "Oklahoma" },
    { key: "OR", label: "Oregon" },
    { key: "PA", label: "Pennsylvania" },
    { key: "RI", label: "Rhode Island" },
    { key: "SC", label: "South Carolina" },
    { key: "SD", label: "South Dakota" },
    { key: "TN", label: "Tennessee" },
    { key: "TX", label: "Texas" },
    { key: "UT", label: "Utah" },
    { key: "VT", label: "Vermont" },
    { key: "VA", label: "Virginia" },
    { key: "WA", label: "Washington" },
    { key: "WV", label: "West Virginia" },
    { key: "WI", label: "Wisconsin" },
    { key: "WY", label: "Wyoming" },
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
      className="fixed left-1/2 bottom-8 w-auto min-w-[60vw] max-w-none bg-gray-800/95 backdrop-blur-sm text-white shadow-2xl flex items-center justify-center z-[1200] px-6 py-4 border border-gray-700/50"
      style={{ transform: "translateX(-50%)" }}
    >
      <div className="flex items-center justify-between w-full gap-6">
        {/* Gas Filters */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-2">
            <FiFilter className="w-4 h-4" />
            Gases
          </span>
          <div className="flex items-center gap-2">
            {gases.map((gas) => (
              <button
                key={gas.key}
                onClick={() => handleGasChange(gas.key)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 border ${
                  selectedGas === gas.key
                    ? "bg-gray-700 border-gray-600 text-white shadow-lg"
                    : `bg-transparent border-gray-600 text-gray-400 ${gas.hoverColor} hover:border-gray-500 hover:text-gray-200`
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className="w-2 h-2"
                    style={{ backgroundColor: gas.color }}
                  />
                  {gas.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-600" />

        {/* Year Slider */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-2">
            <FiCalendar className="w-4 h-4" />
            Year
          </span>
          <div className="flex items-center gap-3 bg-gray-900/50 px-4 py-2">
            <input
              type="range"
              min={2019}
              max={2023}
              step={1}
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="w-32 h-1 bg-gray-600 appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                  ((year - 2015) / 5) * 100
                }%, #4b5563 ${((year - 2015) / 5) * 100}%, #4b5563 100%)`,
              }}
            />
            <span className="text-base font-bold text-white bg-gray-700 px-3 py-1 min-w-[3rem] text-center">
              {year}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-600" />

        {/* State Dropdown */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-2">
            <FiMapPin className="w-4 h-4" />
            State
          </span>
          <select
            value={selectedState || "ALL"}
            onChange={(e) =>
              setSelectedState(e.target.value === "ALL" ? null : e.target.value)
            }
            className="bg-gray-900/50 border border-gray-600 text-white text-sm px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          >
            {states.map((state) => (
              <option key={state.key} value={state.key} className="bg-gray-800">
                {state.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
