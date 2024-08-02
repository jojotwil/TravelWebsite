import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login2',
    standalone: true,
    templateUrl: './login2.component.html',
    styleUrls: ['./login2.component.css'], // Optional: Add your styles here
    imports: [FormsModule] // Import FormsModule for ngModel
})
export class Login2Component {
    email: string = '';
    password: string = '';

    onLogin() {
        // Implement login logic here
        console.log('Login:', { email: this.email, password: this.password });
    }

    loginWithFacebook() {
        // Implement Facebook login logic here
        console.log('Log In with Facebook');
    }
}
