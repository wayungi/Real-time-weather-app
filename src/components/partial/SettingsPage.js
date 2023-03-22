import React from 'react';

const SettingsPage = () => (
  <form className="absolute inset-0 bg-orange-300 ">
    <section className="m-7 rounded p-5 bg-teal-400">
      <div className="mb-5">
        <input
          type="text"
          placeholder="Enter default location"
          name="location"
          className="p-3 rounded focus:outline-none"
        />
      </div>

      <div className="mb-5">
        <p className="mb-2">Wind Speed Units</p>
        <label htmlFor="wind_speed" className="pl-3">
          kph
          <input
            type="radio"
            id="wind"
            name="wind_speed"
            value="kph"
            className="mr-7 ml-2"
            checked
          />
        </label>

        <label htmlFor="wind_speed" className="pl-3">
          mph
          <input
            type="radio"
            id="wind"
            name="wind_speed"
            value="mph"
            className="ml-2"
          />
        </label>
      </div>

      <div className="mb-5">
        <p className="mb-2">Pressure</p>
        <label htmlFor="pressure" className="pl-3">
          millibars
          <input
            type="radio"
            id="pressure"
            name="air_pressure"
            value="mb"
            className="mr-7 ml-2"
            checked
          />
        </label>

        <label htmlFor="wind_speed" className="pl-3">
          pascal
          <input
            type="radio"
            id="pressure"
            name="air_pressure"
            value="in"
            className="ml-2"
          />
        </label>
      </div>

      <div className="mb-5">
        <p>Temperature</p>
        <label htmlFor="temperature">
          Celcius
          <input type="radio" id="temperature" name="temperature" value="celcius" />
        </label>

        <label htmlFor="wind_speed">
          Fahrenheit
          <input type="radio" id="temperature" name="temperature" value="in" />
        </label>
      </div>
    </section>
  </form>
);

export default SettingsPage;
