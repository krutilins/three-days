import { createReducer, on } from '@ngrx/store';
import { LocationState } from '..';
import * as LocationActions from '../actions/location.actions';

const initialState: LocationState = null;

export const locationReducer = createReducer(
  initialState,
  on(LocationActions.loadCurrentUserLocationSuccess, (state, action) => ({
    ...state,
    currentUserLocaiton: action.cityInfo,
    selectedCity: action.cityInfo
  })),
  on(LocationActions.updateSelectedCityInfo, (state, action) => ({
    ...state,
    selectedCity: action.cityInfo
  })),
  on(LocationActions.setCurrentCityAsSelected, (state, action) => ({ ...state, selectedCity: state.currentUserLocaiton }))
);
