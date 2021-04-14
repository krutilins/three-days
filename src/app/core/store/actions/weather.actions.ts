import { createAction, props } from '@ngrx/store';
import { CurrentWeather } from '../../models/current-weather.model';
import { LocationData } from '../../models/location-data.model';

export const weatherLoad = createAction(
  '[Weather] Weather Load',
  props<LocationData>()
);
export const weatherLoadSuccess = createAction(
  '[Weather API] Weather Load Success',
  props<CurrentWeather>()
);
export const weatherLoadFailure = createAction(
  '[Weather API] Weather Load Failure',
  props<{ error: string }>()
);
