import { UserLocation } from './user-location.model';

export interface UserConnectionInfo {
  as: {
    asn: number,
    name: string,
    route: string,
    domain: string,
    type: string
  };
  domains: string[];
  ip: string;
  isp: string;
  location: UserLocation;
  proxy: {
    proxy: boolean,
    vpn: boolean,
    tor: boolean
  };
}
