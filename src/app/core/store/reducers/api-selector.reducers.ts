import { createReducer, on } from '@ngrx/store';
import { WeatherAPIState } from '..';
import { WeatherAPIes } from '../../models/weather-apies.model';
import * as WeatherAPISelectorActions from '../actions/api-selector.actions';

const initialState: WeatherAPIState = {
  selectedAPI: WeatherAPIes.OpenWeather
};

export const APISelectorReducer = createReducer(
  initialState,
  on(WeatherAPISelectorActions.changeWeatherAPI, (state, { weatherAPI }) => ({ ...state, selectedAPI: weatherAPI }))
);
