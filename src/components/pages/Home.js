import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, queryStatus } from '../reducers/weatherSlice';

const Home = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data);
  const queryState = useSelector(queryStatus);

  useEffect(() => {
    if (queryState === 'idle') {
      dispatch(fetchWeather());
    }
  }, [dispatch, queryState]);

  const data = {
    ...weatherData.location,
    ...weatherData.current,
  };

  console.log(data);

  return (
    <section className="container">
      <header>
        <h1>Real time Weather App</h1>
      </header>
      {/* <div>
        <div className="region">
          <h2>{items}</h2>
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
      </div> */}
    </section>
  );
};

export default Home;