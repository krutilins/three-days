import { createAction, props } from '@ngrx/store';
import { LocationInfo } from '../../models/city-info.model';

export const loadCurrentUserLocation = createAction(
  '[City Info] Load Current User Location By Ip'
);

export const loadCurrentUserLocationSuccess = createAction(
  '[City Info Api] Load Current User Location Success',
  props<{ locationInfo: LocationInfo }>()
);

export const loadCurrentUserLocationFailure = createAction(
  '[City Info Api] Load Current User Location Failure',
  props<{ error: string }>()
);

export const updateSelectedCityInfo = createAction(
  '[City Info] Update City Info',
  props<{ locationInfo: LocationInfo }>()
);

export const setCurrentCityAsSelected = createAction(
  '[City Info] Set Current City As Selected'
);
