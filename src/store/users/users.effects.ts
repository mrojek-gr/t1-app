import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadUsers,
  loadUser,
  loadUsersSuccess,
  loadUsersFailure,
  loadUserSuccess,
  loadUserFailure,
} from './users.actions';
import { catchError, filter, map, mergeMap, of, withLatestFrom } from 'rxjs';
import { UserService } from '../../app/services/user.service';
import { Store } from '@ngrx/store';
import { User } from '../../app/user/user.model';
@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  private store = inject(Store);
  private userService = inject(UserService);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(({ page }) => {
        return this.userService.getUsers(page).pipe(
          map((response) =>
            loadUsersSuccess({
              page: response.page,
              per_page: response.per_page,
              total: response.total,
              total_pages: response.total_pages,
              users: response.data,
            })
          ),
          catchError((error) => of(loadUsersFailure({ error })))
        );
      })
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      withLatestFrom(this.store.select((state) => state.usersState)),
      filter(([action, usersState]) => {
        const userInStore = usersState.users.find(
          (u: User) => u.id === action.id
        );
        return !userInStore;
      }),
      mergeMap(([action]) =>
        this.userService.getUserById(action.id).pipe(
          map((response) => loadUserSuccess({ user: response.data })),
          catchError((err) => of(loadUserFailure({ error: err })))
        )
      )
    )
  );
}
