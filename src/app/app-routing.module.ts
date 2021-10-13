import { DeclarationListEmitMode } from '@angular/compiler';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Admin/core/page-not-found/page-not-found.component';
import { WelcomeAdminComponent } from './Admin/core/welcome-admin/welcome-admin.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { FooterComponent } from './Admin/core/footer/footer.component';
import { NavComponent } from './Admin/core/nav/nav.component';
import { SlidebarComponent } from './Admin/core/slidebar/slidebar.component';
import { ContainerFluidComponent } from './Admin/core/container-fluid/container-fluid.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { VoucherTableComponent } from './Admin/Voucher/voucher-table/voucher-table.component';
import { TableCourseComponent } from './Admin/Course/table-course/table-course.component';



const routes: Routes = [
  {
    //'home',component:PTB2Component
    //'home',component:WelcomeAdminComponent
    path:'home',component:WelcomeAdminComponent,
    children:[
      { path:'',component:ContainerFluidComponent, pathMatch:'full' },
      { path:'course', component: TableCourseComponent}
      
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
  imports: [
   
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    CommonModule],
  declarations:[
   
   TableCourseComponent,
    ContainerFluidComponent,
    NavComponent,
    SlidebarComponent,
    FooterComponent,
    WelcomeAdminComponent,
    PageNotFoundComponent,
    SignInComponent,
    VoucherTableComponent,
  
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
