import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';


import { WelcomeAdminComponent } from './core/welcome-admin/welcome-admin.component';
import { ContainerFluidComponent } from './core/container-fluid/container-fluid.component';
import { TableCourseComponent } from './Course/table-course/table-course.component';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';
import { SignInComponent } from '../auth/sign-in/sign-in.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';




const newLocal = './Course/Course.Module';
const route:Routes=[
    {
        //'home',component:PTB2Component
        //'home',component:WelcomeAdminComponent
        path:'admin',component:WelcomeAdminComponent,
        children:[
          { path:'home',component:ContainerFluidComponent, pathMatch:'full' },
          { path:'course',loadChildren: () => import("./Course/Course.Module").then((m) => m.CourseModule)}
        ]
    },
    {
        path:'sign-up',component:SignUpComponent
      },
      {
        path:'sign-in',component:SignInComponent
      },
      {
        path:'a',redirectTo:'/admin/home'   
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
export class AdminModule { }
