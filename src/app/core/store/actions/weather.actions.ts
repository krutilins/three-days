import { createAction, props } from '@ngrx/store';
import { CurrentWeatherInfo } from '../../models/current-weather-info.model';
import { CoordinateInfo } from '../../models/coordinate-info.model';

export const weatherLoad = createAction(
  '[Weather] Weather Load',
  props<CoordinateInfo>()
);
export const weatherLoadSuccess = createAction(
  '[Weather API] Weather Load Success',
  props<CurrentWeatherInfo>()
);
export const weatherLoadFailure = createAction(
  '[Weather API] Weather Load Failure',
  props<{ error: string }>()
);
