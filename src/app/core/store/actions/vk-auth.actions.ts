import { createAction, props } from '@ngrx/store';

export const auth = createAction(
  '[VK Auth] Auth',
  props<{ code: string, redirectedUri: string }>()
);

export const authSuccess = createAction(
  '[VK Auth API] Auth Success',
  props<{ accessToken: string, expiresIn: number, userId: number }>()
);

export const authFailed = createAction(
  '[VK Auth API] Auth Failed',
  props<{ error: string }>()
);

export const loadInitialAuth = createAction(
  '[VK Auth Local Storage] Load Initial Auth'
);
