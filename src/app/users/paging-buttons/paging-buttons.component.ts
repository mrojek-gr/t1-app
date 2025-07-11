import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectPage,
  selectTotalPages,
} from '../../../store/users/users.selector';
import { AsyncPipe, CommonModule } from '@angular/common';
import { loadUsers } from '../../../store/users/users.actions';

@Component({
  selector: 'app-paging-buttons',
  standalone: true,
  imports: [MatButtonModule, AsyncPipe, CommonModule],
  templateUrl: './paging-buttons.component.html',
  styleUrls: ['./paging-buttons.component.css'],
})
export class PagingButtonsComponent implements OnInit {
  totalPage$!: Observable<number>;
  currentPage$!: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.totalPage$ = this.store.select(selectTotalPages);
    this.currentPage$ = this.store.select(selectPage);
  }

  handlePageChange(page: number): void {
    this.store.dispatch(loadUsers({ page }));
  }
}
