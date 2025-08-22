import React from "react";

export default function FilterCard({ filters, setFilters }) {
  const gases = [
    { key: "CO2", label: "CO2" },
    { key: "CH4", label: "CH4" },
    { key: "CO", label: "CO" },
  ];

  return (
    <div className="absolute bottom-8 right-8 bg-white text-black rounded-lg shadow-lg p-4 w-64">
      <h3 className="text-lg font-semibold mb-2 ">Filters</h3>
      {gases.map(gas => (
        <label key={gas.key} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={filters[gas.key]}
            onChange={() =>
              setFilters(f => ({ ...f, [gas.key]: !f[gas.key] }))
            }
            className="mr-2"
          />
          {gas.label}
        </label>
      ))}
    </div>
  );
}
