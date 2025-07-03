import { createAction, props } from '@ngrx/store';
import { User } from '../../app/user/user.model';

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: User[] }>()
);
