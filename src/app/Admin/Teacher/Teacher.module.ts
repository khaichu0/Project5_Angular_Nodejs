import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';
import { TeacherTableComponent } from './teacher-table/teacher-table.component';
import { AddOrEditTeacherComponent } from './add-or-edit-teacher/add-or-edit-teacher.component';
import { Teacher } from './teacher';



const route:Routes=[
    {
        //'home',component:PTB2Component
        //'home',component:WelcomeAdminComponent
        path:'',component:TeacherTableComponent, 
    },
    {
        path:'detail/:id',component:AddOrEditTeacherComponent,
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
export class TeacherModule { }
