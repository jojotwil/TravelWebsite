import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Add more form controls as needed
    });
  }
  onSubmit() {
    if (this.paymentForm.valid) {
      console.log('Form Data:', this.paymentForm.value);
      // Call the payment API here
    } else {
      console.log('Form is invalid:', this.paymentForm.errors);
    }
  }
  
}
