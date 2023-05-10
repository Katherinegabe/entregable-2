import { useEffect, useState } from 'react'
import { getCoordinates } from './services/getCoordinates';
import { getCurrentWeather } from './services/getCurrentWeather';

import './App.css'

function App() {
  const [weather, setweather] = useState(null);
  const [isCelsius, setisCelsius] = useState(true);

  useEffect(() => {
    const loadWeather = async () => {
      const coordinates = await getCoordinates();

      if (coordinates) {
        const weatherData = await getCurrentWeather(
          coordinates.latitude, 
          coordinates.longitude
        );
        setweather(weatherData);   
      }   
    };
    
    loadWeather();
  }, []);

  return (
    <div className='container_principal'>
      <h1>The time today</h1>
      {weather ? (
        <>
          <article className='second_container'>
            <h2>{weather.weather.main}</h2>
            <p>{weather.weather.description}</p>
            <p>{isCelsius 
                ? weather.temperature.celsius.toFixed(2) 
                : weather.temperature.farenheit.toFixed(2)}{" "} 
                º{isCelsius ? "C" : "F"}
            </p>
            <div>
              <img 
                src= {weather.weather.icon} 
                alt= {weather.weather.descrition}
              />
            </div>
            <p>
              {weather.city}, {weather.country}
            </p>
          </article>
          <button onClick={() => setisCelsius(!isCelsius)}>
            Change º{isCelsius ? "F" : "C"}
          </button>
        </>
      ) : (
      <p>Loading weather...</p>
      )}
    </div>
  );
}
export default App;