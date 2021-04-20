import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoordinateInfo } from '../models/coordinate-info.model';
import { CurrentWeatherInfo } from '../models/current-weather-info.model';
import { WeatherAPIes } from '../models/weather-apies.model';
import { ColorfulCloundsAPIService } from './colorful-clouds-api.service';
import { OpenWeatherAPIService } from './open-weather-api.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPISelectorService {


  constructor(private openWeatherAPIService: OpenWeatherAPIService, private colorfulCloudsAPIService: ColorfulCloundsAPIService) { }

  public getCurrentWeather(selectedAPI: WeatherAPIes, coordinates: CoordinateInfo): Observable<CurrentWeatherInfo> {
    switch (selectedAPI) {
      case WeatherAPIes.OpenWeather: {
        return this.openWeatherAPIService.getCurrentWeather(coordinates);
      }
      case WeatherAPIes.ColorfulClouds: {
        return this.colorfulCloudsAPIService.getCurrentWeather(coordinates);
      }
    }
  }
}
