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

import { TableModule } from 'primeng/table';


import { JwtInterceptor } from './lib/jwt.interceptor';
import { ErrorInterceptor } from './lib/error.interceptor';




// import { HomePageModule } from './HomePage/HomePage.module';













@NgModule({
  declarations: [
    AppComponent,


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
