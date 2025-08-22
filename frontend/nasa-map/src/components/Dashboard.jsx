import React, { useState, useEffect } from "react";
import { fetchCityStats } from "../services/api";
import {
  FiEdit3,
  FiMapPin,
  FiAlertTriangle,
  FiTrendingUp,
  FiTrendingDown,
  FiUsers,
  FiGlobe,
  FiCalendar,
} from "react-icons/fi";

export default function Dashboard() {
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const loadCityData = async () => {
      try {
        const data = await fetchCityStats();
        setCityData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading city data:", error);
        setLoading(false);
      }
    };
    loadCityData();
  }, []);

  const getGasColor = (gasType) => {
    const colors = {
      CO2: "#ef4444",
      CH4: "#f59e0b",
      N2O: "#6b7280",
    };
    return colors[gasType] || "#6b7280";
  };

  const getSeverityColor = (level) => {
    if (level >= 80) return "#ef4444";
    if (level >= 60) return "#f59e0b";
    if (level >= 40) return "#eab308";
    return "#22c55e";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading city statistics...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1
              className="text-4xl font-bold mb-2"
              style={{ fontFamily: "Monoir, sans-serif" }}
            >
              City Emissions Dashboard
            </h1>
            <p className="text-gray-400 text-lg">
              Real-time greenhouse gas emissions monitoring across major cities
            </p>
          </div>
          <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 transition-colors">
            <FiEdit3 className="w-4 h-4" />
            Customize Dashboard
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm font-semibold">
                TOTAL CITIES
              </h3>
              <FiGlobe className="w-5 h-5 text-gray-500" />
            </div>
            <p className="text-3xl font-bold">{cityData.length}</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm font-semibold">
                HIGH ALERTS
              </h3>
              <FiAlertTriangle className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-3xl font-bold text-red-500">
              {cityData.filter((city) => city.alertLevel >= 80).length}
            </p>
          </div>
          <div className="bg-gray-800 border border-gray-700 p-6">
            <h3 className="text-gray-400 text-sm font-semibold mb-2">
              AVG CO₂ LEVEL
            </h3>
            <p className="text-3xl font-bold">
              {Math.round(
                cityData.reduce((sum, city) => sum + city.CO2, 0) /
                  cityData.length
              )}{" "}
              ppm
            </p>
          </div>
          <div className="bg-gray-800 border border-gray-700 p-6">
            <h3 className="text-gray-400 text-sm font-semibold mb-2">
              AVG CH₄ LEVEL
            </h3>
            <p className="text-3xl font-bold">
              {Math.round(
                cityData.reduce((sum, city) => sum + city.CH4, 0) /
                  cityData.length
              )}{" "}
              ppb
            </p>
          </div>
        </div>

        {/* City Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {cityData.map((city) => (
            <div
              key={city.id}
              className="bg-gray-800 border border-gray-700 p-6 hover:border-gray-600 transition-all duration-300 cursor-pointer"
              onClick={() =>
                setSelectedCity(selectedCity?.id === city.id ? null : city)
              }
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
                    <FiMapPin className="w-5 h-5 text-gray-400" />
                    {city.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{city.country}</p>
                </div>
                <div
                  className="w-3 h-3"
                  style={{ backgroundColor: getSeverityColor(city.alertLevel) }}
                />
              </div>

              <div className="space-y-4">
                {/* Emission Levels */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">CO₂</span>
                    <span className="text-sm font-semibold">
                      {city.CO2} ppm
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 h-2">
                    <div
                      className="h-2 transition-all duration-300"
                      style={{
                        width: `${Math.min((city.CO2 / 500) * 100, 100)}%`,
                        backgroundColor: getGasColor("CO2"),
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">CH₄</span>
                    <span className="text-sm font-semibold">
                      {city.CH4} ppb
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 h-2">
                    <div
                      className="h-2 transition-all duration-300"
                      style={{
                        width: `${Math.min((city.CH4 / 3000) * 100, 100)}%`,
                        backgroundColor: getGasColor("CH4"),
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">CO</span>
                    <span className="text-sm font-semibold">{city.CO} ppm</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2">
                    <div
                      className="h-2 transition-all duration-300"
                      style={{
                        width: `${Math.min((city.CO / 50) * 100, 100)}%`,
                        backgroundColor: getGasColor("CO"),
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {selectedCity?.id === city.id && (
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <FiUsers className="inline w-4 h-4 mr-1 text-gray-400" />
                      <span className="text-gray-400">Population:</span>
                      <span className="ml-2 font-semibold">
                        {city.population.toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <FiGlobe className="inline w-4 h-4 mr-1 text-gray-400" />
                      <span className="text-gray-400">Area:</span>
                      <span className="ml-2 font-semibold">
                        {city.area} km²
                      </span>
                    </div>
                    <div>
                      <FiCalendar className="inline w-4 h-4 mr-1 text-gray-400" />
                      <span className="text-gray-400">Last Updated:</span>
                      <span className="ml-2 font-semibold">
                        {city.lastUpdated}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Alert Level:</span>
                      <span
                        className="ml-2 font-semibold"
                        style={{ color: getSeverityColor(city.alertLevel) }}
                      >
                        {city.alertLevel}%
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="text-gray-400 text-sm">Trend:</span>
                    <span
                      className={`ml-2 text-sm font-semibold flex items-center gap-1 ${
                        city.trend >= 0 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      {city.trend >= 0 ? (
                        <FiTrendingUp className="w-4 h-4" />
                      ) : (
                        <FiTrendingDown className="w-4 h-4" />
                      )}
                      {Math.abs(city.trend)}% vs last month
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            Data updated every 15 minutes • Powered by NASA Space Apps Challenge
          </p>
        </div>
      </div>
    </div>
  );
}
