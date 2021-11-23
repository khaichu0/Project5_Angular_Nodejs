import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';


import { WelcomeAdminComponent } from './core/welcome-admin/welcome-admin.component';
import { ContainerFluidComponent } from './core/container-fluid/container-fluid.component';
import { TableCourseComponent } from './Course/table-course/table-course.component';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';
import { SignInComponent } from '../auth/sign-in/sign-in.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CourseModule } from './Course/Course.Module';
import { TeacherModule } from './Teacher/Teacher.module';
import { VoucherModule } from './Voucher/Voucher.Module';
import { ShareModule } from '../share/share.module';





const route:Routes=[
    {
        //'home',component:PTB2Component
        //'home',component:WelcomeAdminComponent
        path:'',component:WelcomeAdminComponent,
        children:[
          { path:'',component:ContainerFluidComponent, pathMatch:'full' },
          { path:'course',loadChildren: () => import("./Course/Course.Module").then((m) => m.CourseModule)},
          { path:'teacher',loadChildren: () => import("./Teacher/Teacher.module").then((m) => m.TeacherModule)},
          { path:'voucher',loadChildren: () => import("./Voucher/Voucher.Module").then((m) => m.VoucherModule)},
          
        ]
    },
    {
      path:'sign-up',component:SignUpComponent
    },
    {
      path:'sign-in',component:SignInComponent
    },
    {
      path:'**', component: PageNotFoundComponent
    }
]
@NgModule({
  declarations: [
  
  ],
  imports: [
    ShareModule,
    CommonModule,
    RouterModule.forChild(route),
  ],
  exports:[
  
    RouterModule
  ],

})
export class AdminModule { }
