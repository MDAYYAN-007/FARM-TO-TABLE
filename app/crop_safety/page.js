"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import getCurrentData from "@/actions/getCurrentData";
import getForecastData from "@/actions/getForecastData";
import Image from "next/image";

const CropSafety = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [cropSafety, setCropSafety] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [safetyStatus, setSafetyStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await getCurrentData(city);
      setWeatherData(response);

      const res = await getForecastData(city);
      setForecastData(res);

      // Check crop safety after forecast data is set
      const safetyStatus = res.forecast.forecastday.every((day) => {
        const maxTemp = day.day.maxtemp_c;
        const minTemp = day.day.mintemp_c;
        const rainChance = day.day.daily_chance_of_rain;

        return maxTemp < 35 && minTemp > 10 && rainChance < 80;
      });
      setSafetyStatus(safetyStatus);
      setCropSafety(safetyStatus ? "Crops are safe" : "Crops are at risk!!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div
<<<<<<< HEAD
<<<<<<< HEAD
        className="w-full min-h-80vh flex gap-10 justify-center items-center "
=======
        className="w-full min-h-78vh flex gap-10 justify-center items-center "
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
=======
        className="w-full min-h-78vh flex gap-10 justify-center items-center "
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
        style={{
          backgroundImage: "url('/images/weather_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-72 w-72 bg-gray-100 bg-opacity-30 border-2 border-gray-300 p-4 rounded-lg shadow-md backdrop-filter backdrop-blur-sm">
          <h2 className="text-lg text-center font-semibold mb-4">
            Weather Forecast
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-10"
          >
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              id="fetch-weather-btn"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Get Weather
            </button>
          </form>
        </div>

        {weatherData && (
          <div className="h-72 w-72 p-4 bg-gray-100 bg-opacity-30 border-2 border-gray-300 rounded-lg shadow-md text-center flex justify-center flex-col items-center backdrop-filter backdrop-blur-sm">
            <div>
              <Image
                src={`https:${weatherData.current.condition.icon}`}
                alt={weatherData.current.condition.text}
                width={50}
                height={50}
              />
            </div>
            <p className="text-lg font-semibold mb-2">
              Location: {weatherData.location.name},{" "}
              {weatherData.location.region}, {weatherData.location.country}
            </p>
            <p className="text-white mb-2">
              Temperature: {weatherData.current.temp_c}°C
            </p>
            <p className="text-white mb-2">
              Condition: {weatherData.current.condition.text}
            </p>
            <p className="text-white mb-2">
              Humidity: {weatherData.current.humidity}%
            </p>
            <p className="text-white mb-2">
              Wind Speed: {weatherData.current.wind_kph} km/h
            </p>
          </div>
        )}

        {cropSafety && (
          <div className=" h-72 w-72 p-4 bg-gray-100 bg-opacity-30 border-2 border-gray-300 rounded-lg shadow-md overflow-y-auto text-center backdrop-filter backdrop-blur-lg">
            <p
              className={`text-2xl font-semibold mb-2 ${
                safetyStatus ? "text-green-500" : "text-red-800"
              }`}
            >
              {cropSafety}
            </p>
            {forecastData &&
              forecastData.forecast.forecastday.map((day, index) => (
                <div key={index} className="mb-4">
                  <p className="text-lg font-semibold">{day.date}</p>
                  <p className="text-white">
                    Max Temp: {day.day.maxtemp_c}°C
                  </p>
                  <p className="text-white">
                    Min Temp: {day.day.mintemp_c}°C
                  </p>
                  <p className="text-white">
                    Chance of Rain: {day.day.daily_chance_of_rain}%
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CropSafety;
