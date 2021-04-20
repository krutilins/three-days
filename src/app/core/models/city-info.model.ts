import { CoordinateInfo } from './coordinate-info.model';

export interface LocationInfo {
  id: string;
  text: string;
  coordinates: CoordinateInfo;
}
