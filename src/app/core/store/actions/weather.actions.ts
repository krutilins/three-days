import { createAction, props } from '@ngrx/store';
import { CurrentWeatherInfo } from '../../models/current-weather-info.model';
import { CoordinateInfo } from '../../models/coordinate-info.model';
import { WeatherAPIes } from '../../models/weather-apies.model';

export const weatherLoad = createAction(
  '[Weather] Weather Load',
  props<{ coordinates: CoordinateInfo, selectedAPI: WeatherAPIes }>()
);
export const weatherLoadSuccess = createAction(
  '[Weather API] Weather Load Success',
  props<{ weather: CurrentWeatherInfo }>()
);
export const weatherLoadFailure = createAction(
  '[Weather API] Weather Load Failure',
  props<{ errorMessage: string }>()
);
