import { WindInfo } from './wind-info.model';

export interface CurrentWeatherInfo {
  temperature: number;
  humidity: number;
  wind: WindInfo;
}
