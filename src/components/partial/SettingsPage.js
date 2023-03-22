import React from 'react';

const SettingsPage = () => (
  <form>
    <div>
      <input type="text" placeholder="Enter default location" name="location" />
    </div>
    <div>
      <p>Wind Speed Units</p>
      <label htmlFor="wind_speed">
        kph
        <input type="radio" id="wind" name="wind_speed" value="kph" />
      </label>

      <label htmlFor="wind_speed">
        mph
        <input type="radio" id="wind" name="wind_speed" value="mph" />
      </label>
    </div>

    <div>
      <p>Pressure</p>
      <label htmlFor="pressure">
        millibars
        <input type="radio" id="pressure" name="air_pressure" value="mb" />
      </label>

      <label htmlFor="wind_speed">
        pascal
        <input type="radio" id="pressure" name="air_pressure" value="in" />
      </label>
    </div>

    <div>
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
  </form>
);

export default SettingsPage;
