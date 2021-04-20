import { createSelector } from '@ngrx/store';
import { AppState, ProfileState } from '..';

export const selectProfile = (state: AppState) => state.profile;

export const selectVKProfile = createSelector(
  selectProfile,
  (state: ProfileState) => state.vk
);
