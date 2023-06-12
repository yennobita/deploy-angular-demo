import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      return true;
    } else {
      // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
