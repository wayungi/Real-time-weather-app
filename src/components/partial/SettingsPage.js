import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

const SettingsPage = () => {
  const currentSpeedUnit = JSON.parse(localStorage.getItem('speedUnit')) || 'kph';
  const currentWindPressureUnit = JSON.parse(localStorage.getItem('pressureUnit')) || 'mb';
  const currentTemperatureUnit = JSON.parse(localStorage.getItem('temperatureUnit')) || 'celcius';

  const [speedUnit, setSpeedUnit] = useState(currentSpeedUnit);
  const [pressureUnit, setPressureUnit] = useState(currentWindPressureUnit);
  const [temperatureUnit, setTemperatureUnit] = useState(currentTemperatureUnit);

  const isTemperatureUnitSelected = (radioUnit) => (temperatureUnit === radioUnit);
  const handleTemperatureClicked = (radioUnit) => {
    setTemperatureUnit(radioUnit);
    localStorage.setItem('temperatureUnit', JSON.stringify(radioUnit));
  };

  const isPressureUnitSelected = (radioUnit) => (pressureUnit === radioUnit);
  const handlePressureClicked = (radioUnit) => {
    setPressureUnit(radioUnit);
    localStorage.setItem('pressureUnit', JSON.stringify(radioUnit));
  };

  const isRadioSelected = (radioUnit) => (speedUnit === radioUnit);
  const handleRadioClicked = (radioUnit) => {
    setSpeedUnit(radioUnit);
    localStorage.setItem('speedUnit', JSON.stringify(radioUnit));
  };

  return (
    <form className="absolute inset-0 bg-[rgba(45,212,191,.5)] pt-7">
      <div className=" flex justify-end pr-7">
        <AiFillCloseCircle size="2em" />
      </div>

      <h1 className="text-center font-bold text-xl">Select your preffered units</h1>

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
              checked={isRadioSelected('kph')}
              onChange={() => handleRadioClicked('kph')}
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
              checked={isRadioSelected('mph')}
              onChange={() => handleRadioClicked('mph')}
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
              checked={isPressureUnitSelected('mb')}
              onChange={() => handlePressureClicked('mb')}
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
              checked={isPressureUnitSelected('in')}
              onChange={() => handlePressureClicked('in')}
            />
          </label>
        </div>

        <div className="mb-5">
          <p className="mb-2">Temperature</p>
          <label htmlFor="temperature" className="pl-3">
            Celcius
            <input
              type="radio"
              id="temperature"
              name="temperature"
              value="celcius"
              className="mr-7 ml-2"
              checked={isTemperatureUnitSelected('celcius')}
              onChange={() => handleTemperatureClicked('celcius')}
            />
          </label>

          <label htmlFor="wind_speed" className="pl-3">
            Fahrenheit
            <input
              type="radio"
              id="temperature"
              name="temperature"
              value="in"
              className="ml-2"
              checked={isTemperatureUnitSelected('farenheit')}
              onChange={() => handleTemperatureClicked('farenheit')}
            />
          </label>
        </div>
      </section>
    </form>
  );
};

export default SettingsPage;
