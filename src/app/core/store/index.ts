import { CurrentWeather } from '../models/current-weather.model';
import { LocationData } from '../models/location-data.model';

export interface WeatherState {
  currentWeather: CurrentWeather;
}

export interface SelectedWeatherAPIState { // TODO: add opportunity to choose api
  api: string;
}

export interface UserLocationState {
  location: LocationData;
}

export interface AppState {
  weather: WeatherState;
  selectedApi: SelectedWeatherAPIState;
  userLocationInfo: UserLocationState;
}
