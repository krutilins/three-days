import { CurrentWeatherInfo } from '../models/current-weather-info.model';
import { LocationInfo } from '../models/city-info.model';
import { ActionReducerMap } from '@ngrx/store';
import { weatherReducer } from './reducers/weather.reducers';
import { locationReducer } from './reducers/location.reducers';
import { APISelectorReducer } from './reducers/api-selector.reducers';
import { WeatherAPIes } from '../models/weather-apies.model';
export interface WeatherState {
  weatherForSelectedLocation: {
    weather: CurrentWeatherInfo
    loaded: boolean
    errorMessage: string;
  };
}

export interface LocationState {
  currentUserLocaiton: {
    locationInfo: LocationInfo;
    loaded: boolean;
    errorMessage: string;
  };
  selectedLocation: {
    locationInfo: LocationInfo;
    loaded: boolean;
    errorMessage: string;
  };
}

export interface WeatherAPIState {
  selectedAPI: WeatherAPIes;
}
export interface AppState {
  weather: WeatherState;
  location: LocationState;
  weatherAPI: WeatherAPIState;
}

export const reducer: ActionReducerMap<AppState> = {
  weather: weatherReducer,
  location: locationReducer,
  weatherAPI: APISelectorReducer
};
