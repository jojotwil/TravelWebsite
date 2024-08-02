import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.signup(this.username, this.password).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Signup failed. Username already exists.';
        }
      },
      error => {
        this.errorMessage = 'Signup failed. Please try again.';
      }
    );
  }
}
