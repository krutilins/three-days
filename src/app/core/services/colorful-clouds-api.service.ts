import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ColorfulCloudsMetadata } from '../models/colorful-clouds-metadata.model';
import { CurrentWeatherInfo } from '../models/current-weather-info.model';
import { CoordinateInfo } from '../models/coordinate-info.model';

@Injectable({
  providedIn: 'root'
})
export class ColorfulCloundsAPIService {
  private APIKey: string;
  private APIUrl: string;
  private realtimeAPIExtantion: string;

  constructor(private http: HttpClient) {
    this.APIKey = environment.colorfulClouds.APIKey;
    this.APIUrl = environment.colorfulClouds.APIUrl;
    this.realtimeAPIExtantion = environment.colorfulClouds.realtimeAPIExtantion;
  }

  public getCurrentWeather(locationData: CoordinateInfo): Observable<CurrentWeatherInfo> {
    return this.getMetadata(locationData).pipe(
      map(metadata => {
        const weatherResponse = metadata.result.realtime;

        const currentWeather: CurrentWeatherInfo = {
          temperature: weatherResponse.temperature,
          humidity: weatherResponse.humidity,
          wind: {
            degree: weatherResponse.wind.direction,
            speed: weatherResponse.wind.speed
          }
        };
        return currentWeather;
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  private getMetadata(locationData: CoordinateInfo): Observable<ColorfulCloudsMetadata> {

    const options = {
      params: new HttpParams({
        fromObject: {
          unit: 'metric', // TODO: create an opportunity to choose metric units
          lang: 'en_US'
        }
      })
    };

    return this.http.get<ColorfulCloudsMetadata>(`${this.APIUrl}${this.APIKey}/${locationData.lon},${locationData.lat}${this.realtimeAPIExtantion}`, options).pipe(
      catchError(error => { // TODO: should i implement error handler?
        return throwError('error when retrieving weather metadata:', error);
      })
    );
  }
}
