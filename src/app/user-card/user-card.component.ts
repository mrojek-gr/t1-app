import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { User } from '../user/user.model';
import { RedirectCommand, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-card',
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input() user!: User;
}
