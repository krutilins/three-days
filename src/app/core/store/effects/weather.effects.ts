import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { WeatherAPISelectorService } from '../../services/weather-api-selector.service';
import * as WeatherActions from '../actions/weather.actions';

@Injectable()
export class WeatherEffects {

  weatherLoad$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WeatherActions.weatherLoad),
      mergeMap(action => this.weatherAPISelectorService.getCurrentWeather(action.selectedAPI, action.coordinates).pipe(
        map(weather => WeatherActions.weatherLoadSuccess({ weather })),
        catchError(error => of(WeatherActions.weatherLoadFailure({ errorMessage: error })))
      ))
    );
  });

  constructor(private actions$: Actions, private weatherAPISelectorService: WeatherAPISelectorService) { }

}
