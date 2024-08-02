import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Offer {
  id: number;
  governorate: string;
  adresse: string;
  duration: string;
  date: string;
  price: number;
  shortDescription: string;
  description: string;
  agency: string;
  picture: string;
}

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  constructor(private http: HttpClient) { }

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>('/offer.json');
  }
}