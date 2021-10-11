import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SharedataService } from './share/sharedata.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import {NgxPaginationModule} from 'ngx-pagination';
import { SharedModule } from 'primeng/api';
import { AddCouponVoucherComponent } from './Voucher/add-coupon-voucher/add-coupon-voucher.component';
import { AddPriceDealVoucherComponent } from './Voucher/add-price-deal-voucher/add-price-deal-voucher.component';
import { PriceDealVoucherTableComponent } from './Voucher/price-deal-voucher-table/price-deal-voucher-table.component';
import { CouponVoucherTableComponent } from './Voucher/coupon-voucher-table/coupon-voucher-table.component';
import { AddRecomendationVoucherTableComponent } from './Voucher/add-recomendation-voucher-table/add-recomendation-voucher-table.component';





@NgModule({
  declarations: [
    AppComponent,
    AddCouponVoucherComponent,
    AddPriceDealVoucherComponent,
    PriceDealVoucherTableComponent,
    CouponVoucherTableComponent,
    AddRecomendationVoucherTableComponent,
   
  ],
  imports: [  
   CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,


  ],
  providers: [SharedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
