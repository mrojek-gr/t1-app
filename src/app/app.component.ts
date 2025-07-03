import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Store } from '@ngrx/store';
import { MOCK_USERS } from '../user';
import { loadUsers, loadUsersSuccess } from '../store/users/users.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 't1-app';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.store.dispatch(loadUsersSuccess({ users: MOCK_USERS }));
  }
}
