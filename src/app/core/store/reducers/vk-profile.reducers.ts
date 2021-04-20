import { createReducer, on } from '@ngrx/store';
import { ProfileState } from '..';
import * as VkProfileActions from '../actions/vk-profile.actions';

const initialState: ProfileState = {
  vk: {
    error: null,
    profile: null
  }
};

export const vkProfileReducer = createReducer(
  initialState,
  on(VkProfileActions.loadProfileSuccess, (state, action) => ({
    ...state,
    vk: {
      error: null,
      profile: action.vkProfileInfo
    }
  })),
  on(VkProfileActions.loadProfileFailed, (state, action) => ({
    ...state,
    vk: {
      error: action.error,
      profile: null
    }
  }))
);
