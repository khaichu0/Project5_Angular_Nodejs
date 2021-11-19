import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { SharedataService } from './share/sharedata.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { NgxPaginationModule} from 'ngx-pagination';



import { AdminModule } from './Admin/Admin.Module';
import { CourseModule } from './Admin/Course/Course.Module';

import { CourseDetailComponent } from './Admin/Course/course-detail/course-detail.component';
import { PillTableComponent } from './Admin/Pill/pill-table/pill-table.component';
import { AddOrEditPillComponent } from './Admin/Pill/add-or-edit-pill/add-or-edit-pill.component';
import { AddOrEditStudentComponent } from './Admin/Student/add-or-edit-student/add-or-edit-student.component';
import { StudentTableComponent } from './Admin/Student/student-table/student-table.component';
import { TableModule } from 'primeng/table';



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
    TableModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AdminModule,
    CourseModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AppRoutingModule
   
  ],
  providers: [SharedataService,ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
