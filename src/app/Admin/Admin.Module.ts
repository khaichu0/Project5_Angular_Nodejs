import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';


import { WelcomeAdminComponent } from './core/welcome-admin/welcome-admin.component';
import { ContainerFluidComponent } from './core/container-fluid/container-fluid.component';

import { SignInComponent } from '../auth/sign-in/sign-in.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

import { ShareModule } from '../share/share.module';
import { AuthGuard, RoleGuard } from '../lib/auth.guard'; 
import { UnAuthorizedComponent } from './core/un-authorized/un-authorized.component';
import { Role } from '../models/role';





const route:Routes=[
    {
        //'home',component:PTB2Component
        //'home',component:WelcomeAdminComponent
        path:'',component:WelcomeAdminComponent,
        children:[
          { 
            path:'',
            component:ContainerFluidComponent, 
            pathMatch:'full' 
          },
          { 
            path:'course',
            loadChildren: () => import("./Course/Course.Module").then((m) => m.CourseModule),
            canActivate: [RoleGuard], data: { roles: [Role.User,Role.Admin] }
          },
          { 
            path:'teacher',
            loadChildren: () => import("./Teacher/Teacher.module").then((m) => m.TeacherModule),
            canActivate: [RoleGuard], data: { roles: [Role.Admin] }
          },
          { 
            path:'voucher',loadChildren: () => import("./Voucher/Voucher.Module").then((m) => m.VoucherModule),
            canActivate: [RoleGuard], data: { roles: [Role.Admin] }
          },
          { 
            path:'user',loadChildren: () => import("./Employese/User.Module").then((m) => m.UserModule),
            canActivate: [RoleGuard], data: { roles: [Role.Admin] }
          },
          { 
            path:'pill',loadChildren: () => import("./Pill/Pill.Module").then((m) => m.PillModule),
            canActivate: [RoleGuard], data: { roles: [Role.Admin] }
          },
          
        ],
        canActivate:[AuthGuard]
    },
    {
      path:'unauthorized',component:UnAuthorizedComponent
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
