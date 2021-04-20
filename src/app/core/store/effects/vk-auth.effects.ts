import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as VkAuthActions from '../actions/vk-auth.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { VkApiService } from '../../services/vk-api.service';
import { of } from 'rxjs';

@Injectable()
export class VkAuthEffects {

  auth$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VkAuthActions.auth),
      mergeMap(action => this.vkApiService.signIn(action.code, action.redirectedUri).pipe(
        map(vkAuthInfo => VkAuthActions.authSuccess({
          accessToken: vkAuthInfo.accessToken,
          expiresIn: vkAuthInfo.expiresIn,
          userId: vkAuthInfo.userId
        })),
        catchError(error => of(VkAuthActions.authFailed({ error })))
      ))
    );
  });

  authLocalStorage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VkAuthActions.loadInitialAuth),
      mergeMap(() => of(VkAuthActions.authSuccess(this.vkApiService.getAuthInfoFromLocalStorage()))),
      catchError(error => of(VkAuthActions.authFailed({ error })))
    );
  });

  constructor(private actions$: Actions, private vkApiService: VkApiService) { }
}
