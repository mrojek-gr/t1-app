import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-paging-buttons',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './paging-buttons.component.html',
  styleUrls: ['./paging-buttons.component.css'],
})
export class PagingButtonsComponent {}
