import { CurrentWeatherInfo } from '../models/current-weather-info.model';
import { CityInfo } from '../models/city-info.model';
import { ActionReducerMap } from '@ngrx/store';
import { weatherReducer } from './reducers/weather.reducers';
import { locationReducer } from './reducers/location.reducers';
export interface WeatherState {
  currentWeather: CurrentWeatherInfo;
}
export interface LocationState {
  currentUserLocaiton: CityInfo;
  selectedCity: CityInfo;
}

export interface AppState {
  weather: WeatherState;
  location: LocationState;
}

export const reducer: ActionReducerMap<AppState> = {
  weather: weatherReducer,
  location: locationReducer
};
