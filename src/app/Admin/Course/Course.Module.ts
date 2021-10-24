import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { TableCourseComponent } from './table-course/table-course.component';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';





const route:Routes=[
    {
        //'home',component:PTB2Component
        //'home',component:WelcomeAdminComponent
        path:'',component:TableCourseComponent, 
    },
    {
        path:'detail/:id',component:CourseDetailComponent,
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
export class CourseModule { }
