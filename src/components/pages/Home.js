/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchWeather, queryStatus, canSearch, toggleDisplaySearch,
} from '../reducers/weatherSlice';
import Search from '../partials/Search';

const Home = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data);
  const queryState = useSelector(queryStatus);
  const displaySearch = useSelector(canSearch);

  useEffect(() => {
    if (queryState === 'idle') {
      dispatch(fetchWeather());
    }
  }, [dispatch, queryState]);

  const data = {
    ...weatherData.location,
    ...weatherData.current,
  };

  const formattedWeatherData = (
    <article>
      <div className="region">
        <h2>
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

  return (
    <section className="container">
      <div>
        {displaySearch ? '' : <BsSearch onClick={() => dispatch(toggleDisplaySearch())} />}
      </div>
      { displaySearch ? <Search /> : formattedWeatherData }
    </section>
  );
};

export default Home;
