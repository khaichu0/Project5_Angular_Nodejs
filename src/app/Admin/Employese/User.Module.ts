import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,  Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ShareModule } from 'src/app/share/share.module'; 

const route:Routes=[
    {
        path: '',
        component: UserComponent,
    },
]
@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(route),  
  ]
})
export class UserModule { }
