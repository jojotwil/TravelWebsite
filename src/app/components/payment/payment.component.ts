import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentModel = {
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    cardHolderName: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Payment Info:', this.paymentModel);
    // Implement your payment logic here
    alert('Payment successful!');
    this.router.navigate(['/']); // Redirect to home page after payment
  }
}
