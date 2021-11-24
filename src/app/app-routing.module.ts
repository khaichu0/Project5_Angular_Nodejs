import { DeclarationListEmitMode } from '@angular/compiler';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from './share/share.module';
import { NgxPaginationModule } from 'ngx-pagination';


import { PageNotFoundComponent } from './Admin/core/page-not-found/page-not-found.component';
import { WelcomeAdminComponent } from './Admin/core/welcome-admin/welcome-admin.component';
import { FooterComponent } from './Admin/core/footer/footer.component';
import { NavComponent } from './Admin/core/nav/nav.component';
import { SlidebarComponent } from './Admin/core/slidebar/slidebar.component';
import { ContainerFluidComponent } from './Admin/core/container-fluid/container-fluid.component';
import { VoucherTableComponent } from './Admin/Voucher/voucher-table/voucher-table.component';
import { TableCourseComponent } from './Admin/Course/table-course/table-course.component';
import { AddCouponVoucherComponent } from './Admin/Voucher/add-coupon-voucher/add-coupon-voucher.component';
import { AddPriceDealVoucherComponent } from './Admin/Voucher/add-price-deal-voucher/add-price-deal-voucher.component';
import { PriceDealVoucherTableComponent } from './Admin/Voucher/price-deal-voucher-table/price-deal-voucher-table.component';
import { CouponVoucherTableComponent } from './Admin/Voucher/coupon-voucher-table/coupon-voucher-table.component';
import { AddRecomendationVoucherTableComponent } from './Admin/Voucher/add-recomendation-voucher-table/add-recomendation-voucher-table.component';
import { TeacherTableComponent } from './Admin/Teacher/teacher-table/teacher-table.component';
import { AddOrEditTeacherComponent } from './Admin/Teacher/add-or-edit-teacher/add-or-edit-teacher.component';
import { SearchComponent } from './Admin/Course/search/search.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { PillTableComponent } from './Admin/Pill/pill-table/pill-table.component';

import { CourseDetailComponent } from './Admin/Course/course-detail/course-detail.component';

import { AddOrEditPillComponent } from './Admin/Pill/add-or-edit-pill/add-or-edit-pill.component';
import { AddOrEditStudentComponent } from './Admin/Student/add-or-edit-student/add-or-edit-student.component';
import { StudentTableComponent } from './Admin/Student/student-table/student-table.component';



const routes: Routes = [
{
  path:'',loadChildren: () => import('./Admin/Admin.Module').then((m) => m.AdminModule)

},
{
  path:'**', component: PageNotFoundComponent
}
];

@NgModule({
  imports: [
    ShareModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    CommonModule],
  
   
  declarations:[
    PillTableComponent,
    TableCourseComponent,
    ContainerFluidComponent,
    NavComponent,
    SlidebarComponent,
    FooterComponent,
    WelcomeAdminComponent,
    PageNotFoundComponent,
    VoucherTableComponent,
    AddCouponVoucherComponent,
    AddPriceDealVoucherComponent,
    PriceDealVoucherTableComponent,
    CouponVoucherTableComponent,
    AddRecomendationVoucherTableComponent,
    TeacherTableComponent,
    AddOrEditTeacherComponent,
    SearchComponent,
    SignInComponent,
    CourseDetailComponent,
    AddOrEditPillComponent,
    AddOrEditStudentComponent,
    StudentTableComponent,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
