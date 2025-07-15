import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../services/login.service';
import { customPasswordValidator } from '../utils/validators/password.validator';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      customPasswordValidator,
    ]),
  });

  constructor(private loginService: LoginService) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email ?? '';
      const password = this.loginForm.value.password ?? '';
      this.loginService.login(email, password).subscribe({
        next: (response) => {
          console.log('Logged in', response);
          localStorage.setItem('token', response.token);
        },
        error: (err) => {
          console.error('Error', err);
        },
      });
    }
  }
}
