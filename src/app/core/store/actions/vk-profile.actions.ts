import { createAction, props } from '@ngrx/store';
import { VkProfileInfo } from '../../models/vk-profile-info.model';

export const loadProfile = createAction(
  '[VK Profile] Load Profile'
);

export const loadProfileSuccess = createAction(
  '[VK Profile API] Load Profile Success',
  props<{ vkProfileInfo: VkProfileInfo }>()
);

export const loadProfileFailed = createAction(
  '[VK Profile API] Load Profile Failed',
  props<{ error: string }>()
);
