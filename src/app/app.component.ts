import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent  } from "./components/footer/footer.component";
import {NavbarComponent  } from "./components/navbar/navbar.component";
import { BookComponent } from './components/book/book.component';
import { Signup2Component } from './components/signup2/signup2.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,NavbarComponent,BookComponent,Signup2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 

  
}
