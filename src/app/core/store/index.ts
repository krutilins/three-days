import { CurrentWeatherInfo } from '../models/current-weather-info.model';
import { LocationInfo } from '../models/city-info.model';
import { ActionReducerMap } from '@ngrx/store';
import { weatherReducer } from './reducers/weather.reducers';
import { locationReducer } from './reducers/location.reducers';
import { APISelectorReducer } from './reducers/api-selector.reducers';
import { WeatherAPIes } from '../models/weather-apies.model';
import { VkAuthInfo } from '../models/user-auth-info.model';
import { vkAuthReducer } from './reducers/vk-auth.reducers';
import { VkProfileInfo } from '../models/vk-profile-info.model';
import { vkProfileReducer } from './reducers/vk-profile.reducers';

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

export interface AuthState {
  vkAuth: {
    authInfo: VkAuthInfo;
    error: string;
  };
}

export interface ProfileState {
  vk: {
    profile: VkProfileInfo;
    error: string;
  };
}

export interface AppState {
  weather: WeatherState;
  location: LocationState;
  weatherAPI: WeatherAPIState;
  auth: AuthState;
  profile: ProfileState;
}

export const reducer: ActionReducerMap<AppState> = {
  weather: weatherReducer,
  location: locationReducer,
  weatherAPI: APISelectorReducer,
  auth: vkAuthReducer,
  profile: vkProfileReducer
};
