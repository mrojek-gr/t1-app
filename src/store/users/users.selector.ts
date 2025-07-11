import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.reducer';

export const selectUsersState = createFeatureSelector<UsersState>('usersState');

export const selectAllUsers = createSelector(
  selectUsersState,
  (state: UsersState) => state.users
);

export const selectUserById = (userId: number) =>
  createSelector(selectUsersState, (state: UsersState) =>
    state.users.find((user) => user.id === userId)
  );

export const selectPage = createSelector(
  selectUsersState,
  (state: UsersState) => state.page
);

export const selectTotalPages = createSelector(
  selectUsersState,
  (state: UsersState) => state.total_pages
);
