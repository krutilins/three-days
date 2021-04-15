import { createAction, props } from '@ngrx/store';
import { WeatherAPIes } from '../../models/weather-apies.model';

export const changeWeatherAPI = createAction(
  '[Weather API Selector] Change Weather API',
  props<{ weatherAPI: WeatherAPIes }>()
);
