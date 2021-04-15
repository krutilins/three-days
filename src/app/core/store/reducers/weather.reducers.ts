import { createReducer, on } from '@ngrx/store';
import { WeatherState } from '..';
import * as WeatherActions from '../actions/weather.actions';


const initialState: WeatherState = null;

export const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.weatherLoadSuccess, (state, { humidity, temperature, wind }) => ({
    ...state, currentWeather: {
      humidity,
      temperature,
      wind
    }
  })),
);
