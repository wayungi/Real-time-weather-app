/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../reducers/weatherSlice';
// import Search from '../partials/Search';

const Home = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data);
  const [location, setLocation] = useState(null);
  const search = location ?? 'Kigali';

  useEffect(() => {
    dispatch(fetchWeather(search));
  }, [dispatch]);

  const data = {
    ...weatherData.location,
    ...weatherData.current,
  };

  const formattedWeatherData = (
    <article>
      <div className="region">
        <h2 className="text-blue-500">
          {data.tz_id?.split('/')[0]}
          {' '}
          /
          {' '}
          {data.country}
        </h2>
        <h3>{data.name}</h3>
      </div>

      <div>
        <div>
          <img src={`https:${data?.condition?.icon}`} alt="weather" />
        </div>
        <p>{data?.condition?.text}</p>
      </div>

      <div>
        <div>
          Temperature
          <span>
            {data.feelslike_c}
            <sup>o</sup>
            C
          </span>
          /
          <span>
            {data.feelslike_f}
            <sup>o</sup>
            F
          </span>
        </div>
        <p>
          Wind speed
          {' '}
          <span>{data.wind_kph}</span>
          kph
          {' '}
          /
          <span>{data.wind_mph}</span>
          mph
        </p>
        <p>
          Wind direction
          {' '}
          <span>{data.wind_dir}</span>
        </p>
        <p>
          Pressure
          {' '}
          <span>{data.pressure_in}</span>
          in /
          <span>{data.pressure_mb}</span>
          mb
        </p>
      </div>

    </article>
  );

  const handleChange = (event) => {
    setLocation(event.target.value);
    dispatch(fetchWeather(event.target.value));
  };

  return (
    <section>
      <div>
        <form className="flex justify-center w-full">
          <input
            type="text"
            className="w-[95%] py-2 px-3 rounded focus:outline-none"
            name="search"
            placeholder="Enter location"
            onChange={(e) => handleChange(e)}
            value={location}
          />
        </form>
      </div>
      {formattedWeatherData }
    </section>
  );
};

export default Home;
