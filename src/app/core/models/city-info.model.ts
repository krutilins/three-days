import { CoordinateInfo } from './coordinate-info.model';

export interface CityInfo {
  id: string;
  text: string;
  coordinates: CoordinateInfo;
}
