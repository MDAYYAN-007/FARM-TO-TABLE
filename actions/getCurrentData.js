import axios from "axios";

const getCurrentData = async (cityName) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API}&q=${cityName}&aqi=no`
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

export default getCurrentData;


// http://api.weatherapi.com/v1/forecast.json?key=b972299e8c8c4fb6885180235242707&q=Tumkur&days=5&aqi=no&alerts=no
// http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API}&q=Tumkur&aqi=no
