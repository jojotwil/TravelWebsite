import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private loggedIn = new BehaviorSubject<boolean>(false);
  private currentUser: User | null = null;

  // Example users list
  private users: User[] = [
    { username: 'jojo', password: 'p1' },
    { username: 'a', password: 'p2' },
  ];

  constructor() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
    const storedLoggedIn = localStorage.getItem('loggedIn');
    if (storedLoggedIn) {
      this.isAuthenticated = JSON.parse(storedLoggedIn);
      this.loggedIn.next(this.isAuthenticated);
    }
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.isAuthenticated = true;
      this.currentUser = user;
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.loggedIn.next(true);
      return true;
    }
    return false;
  }

  signup(username: string, password: string): Observable<boolean> {
    if (this.users.find(u => u.username === username)) {
      return of(false); // User already exists
    }
    this.users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(this.users));
    return of(true);
  }

  logout(): void {
    this.isAuthenticated = false;
    this.currentUser = null;
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
