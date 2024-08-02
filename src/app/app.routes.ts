import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { BookComponent } from './components/book/book.component';
import { SignupComponent } from './components/signup/signup.component';
import { Signup2Component } from './components/signup2/signup2.component';
import { Login2Component } from './components/login2/login2.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'book', component: BookComponent },
    {path: 'Signup',component: SignupComponent},
    { path: 'login', component: LoginComponent },
    { path: 'SignupA', component: Signup2Component },
    { path: 'LoginA', component: Login2Component },
    { path: 'payment', component: PaymentComponent },
    { path: '**', component: ErrorComponent }
];
