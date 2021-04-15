import { createReducer, on } from '@ngrx/store';
import { WeatherState } from '..';
import * as WeatherActions from '../actions/weather.actions';


const initialState: WeatherState = {
  weatherForSelectedLocation: {
    weather: null,
    loaded: false,
    errorMessage: 'Weather For Selected Location No Loaded'
  }
};

export const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.weatherLoadSuccess, (state, { weather }) => ({
    ...state,
    weatherForSelectedLocation: {
      weather,
      loaded: true,
      errorMessage: null
    }
  })),
  on(WeatherActions.weatherLoadFailure, (state, { errorMessage }) => ({
    ...state,
    weatherForSelectedLocation: {
      weather: null,
      loaded: false,
      errorMessage
    }
  }))
);
