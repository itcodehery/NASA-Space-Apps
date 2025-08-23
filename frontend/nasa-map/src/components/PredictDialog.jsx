import React, { useState, useEffect } from "react";
import {
  FiX,
  FiGlobe,
  FiMapPin,
  FiCalendar,
  FiActivity,
  FiTrendingUp,
  FiAlertCircle,
} from "react-icons/fi";

export default function PredictDialog({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    latitude: "",
    longitude: "",
    city_name: "",
    state: "",
    reporting_year: new Date().getFullYear(),
    gas_type: "CO2",
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");

  const cityData = [
    { name: "New York", state: "NY", lat: 40.7128, lng: -74.006 },
    { name: "Los Angeles", state: "CA", lat: 34.0522, lng: -118.2437 },
    { name: "Chicago", state: "IL", lat: 41.8781, lng: -87.6298 },
    { name: "Houston", state: "TX", lat: 29.7604, lng: -95.3698 },
    { name: "Phoenix", state: "AZ", lat: 33.4484, lng: -112.074 },
    { name: "Philadelphia", state: "PA", lat: 39.9526, lng: -75.1652 },
    { name: "San Antonio", state: "TX", lat: 29.4241, lng: -98.4936 },
    { name: "San Diego", state: "CA", lat: 32.7157, lng: -117.1611 },
    { name: "Dallas", state: "TX", lat: 32.7767, lng: -96.797 },
    { name: "San Jose", state: "CA", lat: 37.3382, lng: -121.8863 },
    { name: "Austin", state: "TX", lat: 30.2672, lng: -97.7431 },
    { name: "Jacksonville", state: "FL", lat: 30.3322, lng: -81.6557 },
    { name: "Fort Worth", state: "TX", lat: 32.7555, lng: -97.3308 },
    { name: "Columbus", state: "OH", lat: 39.9612, lng: -82.9988 },
    { name: "Charlotte", state: "NC", lat: 35.2271, lng: -80.8431 },
    { name: "San Francisco", state: "CA", lat: 37.7749, lng: -122.4194 },
    { name: "Indianapolis", state: "IN", lat: 39.7684, lng: -86.1581 },
    { name: "Seattle", state: "WA", lat: 47.6062, lng: -122.3321 },
    { name: "Denver", state: "CO", lat: 39.7392, lng: -104.9903 },
    { name: "Washington", state: "DC", lat: 38.9072, lng: -77.0369 },
  ];

  const gasTypes = [
    { value: "CO2", label: "Carbon Dioxide (CO₂)", unit: "metric tons CO₂e" },
    { value: "CH4", label: "Methane (CH₄)", unit: "metric tons CO₂e" },
    { value: "N2O", label: "Nitrous Oxide (N₂O)", unit: "metric tons CO₂e" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "latitude" || name === "longitude" || name === "reporting_year"
          ? parseFloat(value) || value
          : value,
    }));
  };

  const handleCityChange = (e) => {
    const cityName = e.target.value;
    setSelectedCity(cityName);

    if (cityName) {
      const city = cityData.find((c) => c.name === cityName);
      if (city) {
        setFormData((prev) => ({
          ...prev,
          city_name: city.name,
          state: city.state,
          latitude: city.lat,
          longitude: city.lng,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        city_name: "",
        state: "",
        latitude: "",
        longitude: "",
      }));
    }
  };

  const randomizeCity = () => {
    const randomCity = cityData[Math.floor(Math.random() * cityData.length)];
    setSelectedCity(randomCity.name);
    setFormData((prev) => ({
      ...prev,
      city_name: randomCity.name,
      state: randomCity.state,
      latitude: randomCity.lat,
      longitude: randomCity.lng,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const response = await fetch("http://localhost:8000/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          gas_type: formData.gas_type.toLowerCase(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPrediction(data);
    } catch (err) {
      setError(err.message || "Failed to fetch prediction");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000]"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 border border-gray-700 rounded-none p-8 max-w-2xl mx-4 text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2
            className="text-2xl font-bold flex items-center gap-2"
            style={{ fontFamily: "Monoir, sans-serif" }}
          >
            <FiTrendingUp className="w-5 h-5" />
            Emission Predictor
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold"
            aria-label="Close dialog"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800 p-4 rounded border border-gray-600">
            <p className="text-sm text-gray-300 flex items-start gap-2">
              <FiGlobe className="w-4 h-4 mt-1 flex-shrink-0" />
              <span>
                Predict greenhouse gas emissions for facilities using machine
                learning models. Enter facility details to get emission
                forecasts for CO₂, CH₄, or N₂O.
              </span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <FiMapPin className="w-4 h-4" />
                    Select City
                  </label>
                  <select
                    value={selectedCity}
                    onChange={handleCityChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">
                      Choose a city (auto-fills coordinates)
                    </option>
                    {cityData.map((city) => (
                      <option key={city.name} value={city.name}>
                        {city.name}, {city.state}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={randomizeCity}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors"
                    title="Randomize city selection"
                  >
                    🎲
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <FiMapPin className="w-4 h-4" />
                    City Name
                  </label>
                  <input
                    contentEditable={true}
                    type="text"
                    name="city_name"
                    required
                    value={formData.city_name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    placeholder="Los Angeles"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <FiMapPin className="w-4 h-4" />
                    State
                  </label>
                  <input
                    contentEditable={false}
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    placeholder="CA"
                    maxLength="2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <FiMapPin className="w-4 h-4" />
                    Latitude
                  </label>
                  <input
                    contentEditable={false}
                    type="number"
                    name="latitude"
                    step="0.000001"
                    required
                    value={formData.latitude}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    placeholder="34.0522"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <FiMapPin className="w-4 h-4" />
                    Longitude
                  </label>
                  <input
                    contentEditable={false}
                    type="number"
                    name="longitude"
                    step="0.000001"
                    required
                    value={formData.longitude}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    placeholder="-118.2437"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  Reporting Year
                </label>
                <input
                  type="number"
                  name="reporting_year"
                  min="2020"
                  max="2030"
                  required
                  value={formData.reporting_year}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <FiActivity className="w-4 h-4" />
                  Gas Type
                </label>
                <select
                  name="gas_type"
                  required
                  value={formData.gas_type}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
                >
                  {gasTypes.map((gas) => (
                    <option key={gas.value} value={gas.value}>
                      {gas.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-medium py-3 px-4 rounded transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Predicting...
                </>
              ) : (
                <>
                  <FiTrendingUp className="w-4 h-4" />
                  Predict Emissions
                </>
              )}
            </button>
          </form>

          {error && (
            <div className="bg-red-900 border border-red-700 rounded p-4">
              <div className="flex items-start gap-2">
                <FiAlertCircle className="w-4 h-4 mt-1 flex-shrink-0 text-red-400" />
                <div>
                  <p className="text-red-300 font-medium">Prediction Error</p>
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              </div>
            </div>
          )}

          {prediction && (
            <div className="bg-green-900 border border-green-700 rounded p-4">
              <div className="flex items-start gap-2">
                <FiTrendingUp className="w-4 h-4 mt-1 flex-shrink-0 text-green-400" />
                <div>
                  <p className="text-green-300 font-medium">
                    Prediction Result
                  </p>
                  <p className="text-green-400 text-sm">
                    Predicted{" "}
                    {gasTypes.find((g) => g.value === formData.gas_type)?.label}{" "}
                    emissions:
                    <span className="text-green-300 font-bold ml-1">
                      {prediction.predicted_emission?.toLocaleString() ||
                        prediction.toLocaleString()}
                      {
                        gasTypes.find((g) => g.value === formData.gas_type)
                          ?.unit
                      }
                    </span>
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    Based on facility data for {formData.city_name},{" "}
                    {formData.state} in {formData.reporting_year}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
