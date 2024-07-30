import axios from "axios";

const getForecastData = async (cityName) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API}&q=${cityName}&days=5&aqi=no&alerts=no`
    );
    return response.data;
  } catch (err) {
    if (err.response) {
      console.error(
        `Error fetching weather data: ${err.response.status} ${err.response.statusText}`
      );
      console.error(err.response.data);
    } else {
      console.error(`Error fetching weather data: ${err.message}`);
    }
    return null;
  }
};

export default getForecastData;
