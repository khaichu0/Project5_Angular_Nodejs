import { DeclarationListEmitMode } from '@angular/compiler';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Admin/core/page-not-found/page-not-found.component';
import { WelcomeAdminComponent } from './Admin/core/welcome-admin/welcome-admin.component';

import { FooterComponent } from './Admin/core/footer/footer.component';
import { NavComponent } from './Admin/core/nav/nav.component';
import { SlidebarComponent } from './Admin/core/slidebar/slidebar.component';
import { ContainerFluidComponent } from './Admin/core/container-fluid/container-fluid.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { VoucherTableComponent } from './Admin/Voucher/voucher-table/voucher-table.component';
import { TableCourseComponent } from './Admin/Course/table-course/table-course.component';





const routes: Routes = [

{
  path:'',redirectTo:'admin/home',pathMatch:'full'

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
    VoucherTableComponent,
  
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
