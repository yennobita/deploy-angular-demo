import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  LoggedIn = false;

  constructor(private router: Router) {}

  login(username: string, password: string): Observable<boolean> {
    // Kiểm tra thông tin đăng nhập cứng
    if (username === 'admin' && password === 'admin') {
      const loggedIn = true;

      this.loggedIn.next(loggedIn);
      if (loggedIn) {
        this.router.navigate(['/admin']);
      }
    }
    return this.loggedIn.asObservable();
  }

  logout(): void {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
