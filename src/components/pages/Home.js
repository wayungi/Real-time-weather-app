/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../reducers/weatherSlice';

const Home = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data);
  const [location, setLocation] = useState(null);
  const search = location ?? 'Kigali';

  // ===
  // setScale(scale);

  useEffect(() => {
    dispatch(fetchWeather(search));
  }, [dispatch]);

  const data = {
    ...weatherData.location,
    ...weatherData.current,
  };

  const formattedWeatherData = (
    <article className="flex flex-col items-center">
      <div>
        <h2 className="font-rubik-font font-[600] mb-2">
          <span className="text-xl">{data.tz_id?.split('/')[0]}</span>
          {' '}
          /
          {' '}
          {data.country}
        </h2>
        <h3 className="text-center">{data.name}</h3>
      </div>

      <div className="my-2 rounded pt-1 pb-4 py-3">
        <div>
          <img className="w-32" src={`https:${data?.condition?.icon}`} alt="weather" />
        </div>
        <p className="text-center">{data?.condition?.text}</p>
      </div>

      <div className="text-center relative">
        <span className="text-6xl">{data.feelslike_c}</span>
        {/* {data.feelslike_c} */}
        <sup className="absolute top-2">o</sup>
      </div>

      <section className="flex">
        <span>
          {/* Wind speed */}
          {' '}
          <span>{data.wind_kph}</span>
          {/* kph
          {' '}
          /
          <span>{data.wind_mph}</span>
          mph */}
        </span>
        <span>
          {/* Wind direction */}
          {' '}
          <span>{data.wind_dir}</span>
        </span>
        <span>
          {/* Pressure */}
          {' '}
          <span>{data.pressure_in}</span>
          {/* in /
          <span>{data.pressure_mb}</span>
          mb */}
        </span>
      </section>

    </article>
  );

  const handleChange = (event) => {
    setLocation(event.target.value);
    dispatch(fetchWeather(event.target.value));
  };

  return (
    <section>
      <div>
        <form className="flex justify-center w-full mb-5">
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
