// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  openWeather: {
    APIKey: '0003867af3a31ba78e79574ac616112e',
    APIUrl: 'https://api.openweathermap.org/data/2.5/weather'
  },
  geoIpify: {
    APIKey: 'at_9o0dADQcHHIS3X4AebVa2xnyhkx1B',
    APIUrl: 'https://geo.ipify.org/api/v1'
  },
  colorfulClouds: {
    APIKey: 'wzAgEOmujTgTLWfr',
    APIUrl: 'https://api.caiyunapp.com/v2.5/'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
