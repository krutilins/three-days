import { createReducer, on } from '@ngrx/store';
import { AuthState } from '..';
import * as VkAuthActions from '../actions/vk-auth.actions';

const initialState: AuthState = {
  vkAuth: {
    authInfo: null,
    error: null
  }
};

export const vkAuthReducer = createReducer(
  initialState,
  on(VkAuthActions.authSuccess, (state, action) => ({
    ...state,
    vkAuth: {
      authInfo: {
        accessToken: action.accessToken,
        expiresIn: action.expiresIn,
        userId: action.userId
      },
      error: null
    }
  })),
  on(VkAuthActions.authFailed, (state, action) => ({
    ...state,
    vkAuth: {
      authInfo: null,
      error: action.error
    }
  }))
);
