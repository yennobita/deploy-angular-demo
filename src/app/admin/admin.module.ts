import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from '../login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [DashboardComponent, ProductsComponent, LoginComponent],
  imports: [CommonModule, AdminRoutingModule, NgxPaginationModule],
})
export class AdminModule {}
