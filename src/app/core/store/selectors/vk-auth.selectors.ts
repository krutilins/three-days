import { createSelector } from '@ngrx/store';
import { AppState, AuthState } from '..';

export const selectAuth = (state: AppState) => state.auth;

export const selectVkAuth = createSelector(
  selectAuth,
  (authState: AuthState) => authState.vkAuth
);
