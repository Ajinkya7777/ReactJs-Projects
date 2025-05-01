const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeather(city) {
  try {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    console.log("Fetching weather data from:", url); // Debugging line

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}
