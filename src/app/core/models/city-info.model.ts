import { LocationData } from './location-data.model';

export interface CityInfo {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: LocationData;
}
