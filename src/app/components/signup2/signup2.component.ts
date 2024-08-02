import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-signup2',
    standalone: true,
    templateUrl: './signup2.component.html',
    styleUrls: ['./signup2.component.css'], // Optional: Add your styles here
    imports: [FormsModule] // Import FormsModule for ngModel
})
export class Signup2Component {
    matricule: string = '';
    email: string = '';
    telephone: string = '';
    rib: string = '';

    onSignUp() {
        // Implement signup logic here
        console.log('Sign Up:', { matricule: this.matricule, email: this.email, telephone: this.telephone, rib: this.rib });
    }

    signUpWithFacebook() {
        // Implement Facebook sign-up logic here
        console.log('Sign Up with Facebook');
    }
}
