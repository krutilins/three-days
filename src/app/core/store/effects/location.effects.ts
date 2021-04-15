import { Injectable } from '@angular/core';
import { UserLocationAPIService } from '../../services/user-location-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as LocationActions from '../actions/location.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class LocatoinEffects {

  loadCurrentUserLocation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LocationActions.loadCurrentUserLocation),
      mergeMap(() => this.userLocationApi.getUserLocatoinInfo().pipe(
        map(userLocation => LocationActions.loadCurrentUserLocationSuccess({
          cityInfo: {
            id: String(userLocation.geonameId),
            coordinates: {
              lon: userLocation.lng,
              lat: userLocation.lat
            },
            text: userLocation.country + userLocation.city
          }
        })),
        catchError(error => of(LocationActions.loadCurrentUserLocationFailure({ error })))
      ))
    );
  });

  constructor(private userLocationApi: UserLocationAPIService, private actions$: Actions) { }
}
