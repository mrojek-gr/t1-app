import { Component, OnInit } from '@angular/core';
import { map, Observable, switchMap, tap } from 'rxjs';
import { User } from './user.model';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { selectUserById } from '../../store/users/users.selector';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { loadUser } from '../../store/users/users.actions';

@Component({
  selector: 'app-user',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  user$!: Observable<User | undefined>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      map((params) => params.get('id')),
      map((id) => (id ? parseInt(id, 10) : 0)),
      tap((id) => this.store.dispatch(loadUser({ id }))),
      switchMap((id) => this.store.select(selectUserById(id)))
    );
  }
}
