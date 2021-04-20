import { createSelector } from '@ngrx/store';
import { AppState, WeatherState } from '..';

export const selectWeather = (state: AppState) => state.weather;

export const selectWeatherForSelectedLocation = createSelector(
  selectWeather,
  (selectedWeather: WeatherState) => selectedWeather.weatherForSelectedLocation
);
