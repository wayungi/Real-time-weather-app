import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../reducers/weatherSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather());
  });

  return (
    <section className="container">
      <header>
        <h1>Real time Weather App</h1>
      </header>
      <div className="region">
        <h2>Africa / Kampala</h2>
        <p>local time</p>
      </div>
      <div>
        <p>
          <span>
            20
            <sup>o</sup>
            C
          </span>
          /
          <span>
            39
            <sup>o</sup>
            F
          </span>
        </p>
      </div>
      <div>
        <p>sunny image</p>
        <p>text</p>
        <p>windspeed</p>
      </div>
      <div>
        <p>search</p>
      </div>
    </section>
  );
};

export default Home;
