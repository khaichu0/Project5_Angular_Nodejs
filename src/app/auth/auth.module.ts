import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const route:Routes=[
  {
      //'home',component:PTB2Component
      //'home',component:WelcomeAdminComponent
      path:'login',component:SignInComponent, 
  },
  {
      path:'register',component:SignUpComponent,
  }
  
]
@NgModule({
  declarations: [],
  imports: [

    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class AuthModule { }
