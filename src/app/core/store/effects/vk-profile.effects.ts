import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as VkProfileActions from '../actions/vk-profile.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { VkApiService } from '../../services/vk-api.service';
import { of } from 'rxjs';

@Injectable()
export class VkProfileEffects {

  public loadProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VkProfileActions.loadProfile),
      mergeMap(() => this.vkApiService.getProfileInfo().pipe(
        map(vkProfileInfo => VkProfileActions.loadProfileSuccess({ vkProfileInfo })),
        catchError(error => of(VkProfileActions.loadProfileFailed({ error })))
      ))
    );
  });

  constructor(private actions$: Actions, private vkApiService: VkApiService) { }
}
