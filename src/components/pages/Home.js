/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillSetting } from 'react-icons/ai';
import { fetchWeather } from '../reducers/weatherSlice';
import SettingsPage from '../partial/SettingsPage';

const Home = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data);
  // ! add kigali here for location to prevent linter errorrs
  const [location, setLocation] = useState('Kigali');
  const search = location ?? 'Kigali';
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    dispatch(fetchWeather(search));
  }, [dispatch, search]);

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

      <div className="text-center relative mb-5">
        <span className="text-6xl">{data.feelslike_c}</span>
        {/* {data.feelslike_c} */}
        <sup className="absolute top-2">o</sup>
      </div>

      <section className="flex gap-2 w-[90%] mx-1">
        <div className="text-center py-2 flex-1 rounded-md bg-[rgb(150,247,247)]">
          <h4 className="text-sm  mb-8 font-bold">Wind speed</h4>
          <span className="text-2xl">
            {data.wind_kph}
            {/* {data.wind_mph} */}
          </span>
        </div>
        <div className="text-center py-2 flex-1 rounded-md bg-[rgb(150,247,247)]">
          <h4 className="text-sm mb-8 font-bold">Wind direction</h4>
          <span className="text-2xl">{data.wind_dir}</span>
        </div>
        <div className="text-center py-2 flex-1 rounded-md bg-[rgb(150,247,247)]">
          <h4 className="text-sm  mb-8 font-bold">Pressure</h4>
          {' '}
          <span className="text-2xl">{data.pressure_in}</span>
          {/* in /
          <span>{data.pressure_mb}</span>
          mb */}
        </div>
      </section>

    </article>
  );

  const handleChange = (event) => {
    setLocation(event.target.value);
    dispatch(fetchWeather(event.target.value));
  };

  const settings = () => {
    setShowSettings((prevState) => !prevState);
  };

  return (
    <section className="relative py-10 max-h-screen">
      <div>
        <h1>Real time weather App</h1>
        <div>
          <AiFillSetting onClick={settings} />
        </div>
      </div>
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
      {showSettings ? <SettingsPage /> : null }
    </section>
  );
};

export default Home;
