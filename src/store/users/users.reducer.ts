import { createReducer, on } from '@ngrx/store';
import { loadUsersSuccess, loadUserSuccess } from './users.actions';
import { User } from '../../app/user/user.model';

export interface UsersState {
  users: User[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export const initialState: UsersState = {
  users: [],
  page: 1,
  per_page: 6,
  total: 0,
  total_pages: 0,
};

export const usersReducer = createReducer(
  initialState,
  on(
    loadUsersSuccess,
    (state, { users, page, per_page, total, total_pages }) => ({
      ...state,
      users,
      page,
      per_page,
      total,
      total_pages,
    })
  ),
  on(loadUserSuccess, (state, { user }) => {
    const users = state.users.some((u) => u.id === user.id)
      ? state.users.map((u) => (u.id === user.id ? user : u))
      : [...state.users, user];
    return { ...state, users };
  })
);
