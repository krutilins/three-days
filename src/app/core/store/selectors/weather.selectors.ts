import { createSelector } from '@ngrx/store';
import { AppState, WeatherState } from '..';

export const selectWeather = (state: AppState) => state.weather;

export const selectCurrentWeather = createSelector(
  selectWeather,
  (selectedWeather: WeatherState) => selectedWeather.currentWeather
);
