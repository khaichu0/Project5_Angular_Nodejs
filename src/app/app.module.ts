import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SharedataService } from './share/sharedata.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { NgxPaginationModule} from 'ngx-pagination';



import { AdminModule } from './Admin/Admin.Module';
import { CourseModule } from './Admin/Course/Course.Module';
import { TeacherModule } from './Admin/Teacher/Teacher.module';
import { VoucherModule } from './Admin/Voucher/Voucher.Module';
import { AuthModule } from './auth/auth.module';

import { CourseDetailComponent } from './Admin/Course/course-detail/course-detail.component';
import { PillTableComponent } from './Admin/Pill/pill-table/pill-table.component';
import { AddOrEditPillComponent } from './Admin/Pill/add-or-edit-pill/add-or-edit-pill.component';
import { AddOrEditStudentComponent } from './Admin/Student/add-or-edit-student/add-or-edit-student.component';
import { StudentTableComponent } from './Admin/Student/student-table/student-table.component';
import { TableModule } from 'primeng/table';


import { JwtInterceptor } from './lib/jwt.interceptor';
import { ErrorInterceptor } from './lib/error.interceptor';




// import { HomePageModule } from './HomePage/HomePage.module';













@NgModule({
  declarations: [
    AppComponent,
    CourseDetailComponent,
    PillTableComponent,
    AddOrEditPillComponent,
    AddOrEditStudentComponent,
    StudentTableComponent,
  

  ],
  imports: [ 
    FormsModule, 
    ReactiveFormsModule,
    TableModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AdminModule,
    CourseModule,
    TeacherModule,
    VoucherModule,
    AuthModule,
    NgxPaginationModule,
    AppRoutingModule
   
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    SharedataService,ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
