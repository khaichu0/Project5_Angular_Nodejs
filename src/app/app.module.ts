import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { SharedataService } from './share/sharedata.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { NgxPaginationModule} from 'ngx-pagination';
import { SharedModule } from 'primeng/api';


import { AdminModule } from './Admin/Admin.Module';
// import { HomePageModule } from './HomePage/HomePage.module';



import { AddCouponVoucherComponent } from './Admin/Voucher/add-coupon-voucher/add-coupon-voucher.component';
import { AddPriceDealVoucherComponent } from './Admin/Voucher/add-price-deal-voucher/add-price-deal-voucher.component';
import { PriceDealVoucherTableComponent } from './Admin/Voucher/price-deal-voucher-table/price-deal-voucher-table.component';
import { CouponVoucherTableComponent } from './Admin/Voucher/coupon-voucher-table/coupon-voucher-table.component';
import { AddRecomendationVoucherTableComponent } from './Admin/Voucher/add-recomendation-voucher-table/add-recomendation-voucher-table.component';
import { TeacherTableComponent } from './Admin/Teacher/teacher-table/teacher-table.component';
import { AddOrEditTeacherComponent } from './Admin/Teacher/add-or-edit-teacher/add-or-edit-teacher.component';









@NgModule({
  declarations: [
    AppComponent,
    AddCouponVoucherComponent,
    AddPriceDealVoucherComponent,
    PriceDealVoucherTableComponent,
    CouponVoucherTableComponent,
    AddRecomendationVoucherTableComponent,
    TeacherTableComponent,
    AddOrEditTeacherComponent,
  
   
    

   
  ],
  imports: [  
   CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AdminModule,

    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    AppRoutingModule,


  ],
  providers: [SharedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
