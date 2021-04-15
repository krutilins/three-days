export interface ColorfulCloudsMetadata {
  api_status: string;
  api_version: string;
  lang: string;
  location: number[];
  result: {
    primary: number;
    realtime: {
      air_quality: {
        aqi: {
          chn: number;
          usa: number;
        };
        co: number;
        description: {
          chn: string;
          usa: string;
        }
        no2: number;
        o3: number;
        pm10: number;
        pm25: number;
        so2: number;
      };
      apparent_temperature: number;
      cloudrate: number;
      dswrf: number;
      humidity: number;
      life_index: {
        comfort: {
          desc: string;
          index: number;
        };
        ultraviolet: {
          desc: string;
          index: number;
        };
      };
      precipitation: {
        local: {
          datasource: string;
          intensity: number;
          status: string;
        };
      };
      pressure: number;
      scycon: string;
      status: string;
      temperature: number;
      visibility: number;
      wind: {
        direction: number;
        speed: number;
      }
    }
  };
  server_time: number;
  status: string;
  timezone: string;
  tzshift: number;
  unit: string;
}
