import { createSelector } from '@ngrx/store';
import { AppState, LocationState } from '..';

export const selectLocation = (state: AppState) => state.location;

export const selectCurrentUserLocation = createSelector(
  selectLocation,
  (locationState: LocationState) => locationState.currentUserLocaiton
);

export const selectSelectedLocation = createSelector(
  selectLocation,
  (locationState: LocationState) => locationState.selectedLocation
);
