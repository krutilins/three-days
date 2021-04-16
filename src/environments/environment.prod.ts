export const environment = {
  production: true,
  openWeather: {
    APIKey: '0003867af3a31ba78e79574ac616112e',
    APIUrl: 'https://api.openweathermap.org/data/2.5/weather'
  },
  colorfulClouds: {
    APIKey: 'wzAgEOmujTgTLWfr',
    APIUrl: 'https://api.caiyunapp.com/v2.5/',
    realtimeAPIExtantion: '/realtime.json',
    forecastAPIExtention: '/weather.json'
  },
  geoIpify: {
    APIKey: 'at_9o0dADQcHHIS3X4AebVa2xnyhkx1B',
    APIUrl: 'https://geo.ipify.org/api/v1'
  },
  hereGeocoding: {
    APIKey: '3pHLbgg1CgdfkshUo0i_9y8qVaXvW37lSXilnNvylmo',
    APIUrl: 'https://geocode.search.hereapi.com/v1/',
    geocodeEndpoint: 'geocode'
  },
  geoApify: {
    APIKey: '384335153e794f04ae10fbc84ec8d154',
    APIUrl: 'https://api.geoapify.com/v1/geocode/',
    autocompleteEndpoint: 'autocomplete'
  }
};
