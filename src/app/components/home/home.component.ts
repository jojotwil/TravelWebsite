import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchModel = {
    location: '',
    date: ''
  };

  offres = [
    {
      governorate: "Tunis",
      adresse: "123 Main St",
      duration: "3 days",
      date: "2024-07-10",
      price: "200",
      shortDescription: "A short description of the offer",
      description: "A detailed description of the offer",
      agency: "Best Agency",
      picture: "img/package-1.jpg"
    },
    {
      governorate: "Sfax",
      adresse: "456 Secondary St",
      duration: "5 days",
      date: "2024-08-15",
      price: "350",
      shortDescription: "Another short description",
      description: "Another detailed description",
      agency: "Super Agency",
      picture: "img/package-2.jpg"
    },
    {
      governorate: "Nabeul",
      adresse: "789 Tertiary St",
      duration: "7 days",
      date: "2024-09-20",
      price: "500",
      shortDescription: "A third short description",
      description: "A third detailed description",
      agency: "Excellent Agency",
      picture: "img/package-3.jpg"
    }
  ];

  filteredOffres = [...this.offres];
  selectedOffre: any;

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  onSubmit() {
    console.log('Search Data:', this.searchModel);
    this.filteredOffres = this.offres.filter(offre => 
      (this.searchModel.location === '' || offre.governorate.toLowerCase().includes(this.searchModel.location.toLowerCase())) &&
      (this.searchModel.date === '' || offre.date === this.searchModel.date)
    );
  }

  openModal(offre: any) {
    this.selectedOffre = offre;
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      // Directly use Bootstrap Modal via JavaScript
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  bookNow(offre: any) {
    if (this.authService.getCurrentUser()) {
      // Logic for booking
      console.log('Booking:', offre);
      this.router.navigate(['/payment']);
    } else {
      this.router.navigate(['/Signup']);
    }
  }
}
