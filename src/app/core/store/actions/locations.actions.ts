import { createAction } from '@ngrx/store';

export const loadLocations = createAction(
  '[Location List] Load Location List'
);

export const loadLocationsSuccess = createAction(
  '[Location List API] Load Location List Success'
);

export const loadLocationsFailure = createAction(
  '[Location List API] Load Location List Failure'
);
