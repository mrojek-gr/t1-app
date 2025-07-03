import { createReducer, on } from '@ngrx/store';
import { loadUsersSuccess } from './users.actions';
import { User } from '../../app/user/user.model';

export interface UsersState {
  users: User[];
}

export const initialState: UsersState = {
  users: [],
};

export const usersReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users }))
);
