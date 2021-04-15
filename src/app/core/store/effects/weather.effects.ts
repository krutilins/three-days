import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { OpenWeatherAPIService } from '../../services/open-weather-api.service';
import * as WeatherActions from '../actions/weather.actions';

@Injectable()
export class WeatherEffects {

  weatherLoad$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WeatherActions.weatherLoad),
      mergeMap(action => this.openWeatherAPIService.getCurrentWeather({ lat: action.lat, lon: action.lon }).pipe(
        map(currentWeatherResponse => WeatherActions.weatherLoadSuccess(currentWeatherResponse)),
        catchError(error => of(WeatherActions.weatherLoadFailure({ error: `error in weatherLoad$ effect:${error}` })))
      ))
    );
  });

  constructor(private actions$: Actions, private openWeatherAPIService: OpenWeatherAPIService) { }

}
