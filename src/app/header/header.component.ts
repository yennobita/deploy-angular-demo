import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoggedIn$!: Observable<boolean>;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }
  login(): void {
    // Thực hiện các hành động đăng nhập
  }

  logout(): void {
    this.authService.logout();
    alert('logout thành công, xin mời đăng nhập!');
    // Thực hiện các hành động tiếp theo sau khi đăng xuất
  }
}
