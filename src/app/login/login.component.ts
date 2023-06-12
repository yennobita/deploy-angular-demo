import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) {} 

  onSubmit(): void {
    this.authService
      .login(this.username, this.password)
      .subscribe((loggedIn: boolean) => {
        if (loggedIn) {
          // Đăng nhập thành công, chuyển hướng đến trang quản trị
          this.router.navigate(['/']);
          alert('đăng nhập thành công!');
        } else {
          // Xử lý thông báo lỗi đăng nhập
          alert('Sai tài khoản hoặc mật khẩu!');
        }
      });
  }
}
