import { DeclarationListEmitMode } from '@angular/compiler';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { ContainerFluidComponent } from './container-fluid/container-fluid.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TableCourseComponent } from './table-course/table-course.component';
import { TableCourseDetailComponent } from './table-course-detail/table-course-detail.component';
import { TableCourseContentComponent } from './table-course-content/table-course-content.component';
import { AddOrEditCourseComponent } from './add-or-edit-course/add-or-edit-course.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import {NgxPaginationModule} from 'ngx-pagination';
const routes: Routes = [
  {
    path:'home',component:WelcomeAdminComponent,
    children:[
      { path:'',component:ContainerFluidComponent, pathMatch:'full' },
      { path:'course',component:TableCourseComponent}
      
    ]
},
{
  path:'sign-up',component:SignUpComponent
},
{
  path:'sign-in',component:SignInComponent
},
{
  path:'',redirectTo:'/home',pathMatch:'full'

},
{
  path:'**', component: PageNotFoundComponent
}
];

@NgModule({
  imports: [NgxPaginationModule,ReactiveFormsModule,FormsModule,RouterModule.forRoot(routes),CommonModule],
  declarations:[
    AddOrEditCourseComponent,
    TableCourseComponent,
    TableCourseDetailComponent,
    TableCourseContentComponent,
    ContainerFluidComponent,
    NavComponent,
    SlidebarComponent,
    FooterComponent,
    WelcomeAdminComponent,
    PageNotFoundComponent,
    SignInComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
