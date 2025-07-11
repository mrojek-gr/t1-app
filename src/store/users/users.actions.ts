import { createAction, props } from '@ngrx/store';
import { User } from '../../app/user/user.model';

export const loadUsers = createAction(
  '[Users] Load Users',
  props<{ page: number }>()
);

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    users: User[];
  }>()
);

export const loadUsersFailure = createAction(
  '[Users] Load Users Failure',
  props<{ error: any }>()
);

export const loadUser = createAction(
  '[Users] Load User',
  props<{ id: number }>()
);

export const loadUserSuccess = createAction(
  '[Users] Load User Success',
  props<{ user: User }>()
);

export const loadUserFailure = createAction(
  '[Users] Load User Failure',
  props<{ error: any }>()
);
