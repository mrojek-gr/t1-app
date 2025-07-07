import { createReducer, on } from '@ngrx/store';
import { loadUsersSuccess, loadUserSuccess } from './users.actions';
import { User } from '../../app/user/user.model';

export interface UsersState {
  users: User[];
}

export const initialState: UsersState = {
  users: [],
};

export const usersReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(loadUserSuccess, (state, { user }) => {
    const users = state.users.some((u) => u.id === user.id)
      ? state.users.map((u) => (u.id === user.id ? user : u))
      : [...state.users, user];
    return { ...state, users };
  })
);
