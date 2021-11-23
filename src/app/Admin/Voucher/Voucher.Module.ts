import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';
import { CouponVoucherTableComponent } from './coupon-voucher-table/coupon-voucher-table.component';
import { AddCouponVoucherComponent } from './add-coupon-voucher/add-coupon-voucher.component';





const route:Routes=[
    {
        //'home',component:PTB2Component
        //'home',component:WelcomeAdminComponent
        path:'',component:CouponVoucherTableComponent, 
    },
    {
        path:'detail/:id',component:AddCouponVoucherComponent,
    },
    
    {
        path:'**', component: PageNotFoundComponent
    }
]
@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,RouterModule.forChild(route)
  ],
  exports:[
      RouterModule
  ],

})
export class VoucherModule { }
