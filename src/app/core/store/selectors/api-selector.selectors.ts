import { createSelector } from '@ngrx/store';
import { AppState, WeatherAPIState } from '..';

export const selectWeatherAPI = (state: AppState): WeatherAPIState => state.weatherAPI;

export const selectSelectedAPI = createSelector(
  selectWeatherAPI,
  (weatherAPIState: WeatherAPIState) => weatherAPIState.selectedAPI
);
