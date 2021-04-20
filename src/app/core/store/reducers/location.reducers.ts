import { createReducer, on } from '@ngrx/store';
import { LocationState } from '..';
import * as LocationActions from '../actions/location.actions';

const initialState: LocationState = {
  currentUserLocaiton: {
    locationInfo: null,
    loaded: false,
    errorMessage: 'Current User Location Not Loaded'
  },
  selectedLocation: {
    locationInfo: null,
    loaded: false,
    errorMessage: 'Selected Location Not Loaded'
  }
};

export const locationReducer = createReducer(
  initialState,
  on(LocationActions.loadCurrentUserLocationSuccess, (state, { locationInfo }) => ({
    ...state,
    currentUserLocaiton: {
      locationInfo,
      loaded: true,
      errorMessage: null,
    },
    selectedLocation: {
      locationInfo,
      loaded: true,
      errorMessage: null,
    }
  })),
  on(LocationActions.updateSelectedCityInfo, (state, { locationInfo }) => ({
    ...state,
    selectedLocation: {
      locationInfo,
      loaded: true,
      errorMessage: null,
    }
  })),
  on(LocationActions.setCurrentCityAsSelected, (state) => ({ ...state, selectedLocation: state.currentUserLocaiton }))
);
