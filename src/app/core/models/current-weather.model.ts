import { WindInfo } from './wind.model';

export interface CurrentWeather {
  temperature: number;
  humidity: number;
  wind: WindInfo;
}
