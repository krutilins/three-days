import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CurrentWeatherInfo } from '../models/current-weather-info.model';
import { CoordinateInfo } from '../models/coordinate-info.model';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherAPIService {
  private APIKey: string;
  private APIUrl: string;

  constructor(private http: HttpClient) {
    this.APIKey = environment.openWeather.APIKey;
    this.APIUrl = environment.openWeather.APIUrl;
  }

  public getCurrentWeather(locationData: CoordinateInfo): Observable<CurrentWeatherInfo> {
    return this.getMetadata(locationData)
      .pipe(
        map(metadata => {
          const currentWeather: CurrentWeatherInfo = {
            temperature: metadata.main.temp,
            humidity: metadata.main.humidity,
            wind: metadata.wind
          };
          return currentWeather;
        }),
        catchError(err => {
          return throwError(err);
        })
      );
  }

  private getMetadata(locationData: CoordinateInfo): Observable<any> {

    const options = {
      params: new HttpParams({
        fromObject: {
          lat: String(locationData.lat),
          lon: String(locationData.lon),
          appid: this.APIKey,
          units: 'metric' // TODO: create an opportunity to choose metric units
        }
      })
    };

    return this.http.get(this.APIUrl, options).pipe(
      catchError(error => { // TODO: should i implement error handler?
        return throwError('error when retrieving weather metadata:', error);
      })
    );
  }
}
