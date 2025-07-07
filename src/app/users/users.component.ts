import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllUsers } from '../../store/users/users.selector';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';
import { PagingButtonsComponent } from './paging-buttons/paging-buttons.component';
import { loadUsers } from '../../store/users/users.actions';

@Component({
  selector: 'app-users',
  imports: [CommonModule, UserCardComponent, PagingButtonsComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.users$ = this.store.select(selectAllUsers);
    console.log('users$', this.users$);
  }
}
