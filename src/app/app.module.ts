import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    HeaderComponent,
    StartComponent,
    HomeComponent,
    ProductdetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
