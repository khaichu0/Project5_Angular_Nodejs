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
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AdminModule } from './Admin/Admin.Module';
import { CourseModule } from './Admin/Course/Course.Module';
import { TeacherModule } from './Admin/Teacher/Teacher.module';
import { VoucherModule } from './Admin/Voucher/Voucher.Module';
import { AuthModule } from './auth/auth.module';
import { PillModule } from './Admin/Pill/Pill.Module';

import { TableModule } from 'primeng/table';


import { JwtInterceptor } from './lib/jwt.interceptor';
import { ErrorInterceptor } from './lib/error.interceptor';
import { UserModule } from './Admin/Employese/User.Module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask} from "@angular/fire/storage";






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
    UserModule,
    PillModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,



  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    SharedataService,ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
