import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { selectUserById } from '../../store/users/users.selector';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

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
    const userId = this.route.snapshot.paramMap.get('id');
    this.user$! = this.store.select(
      selectUserById(userId ? parseInt(userId, 10) : 0)
    );
  }
}
