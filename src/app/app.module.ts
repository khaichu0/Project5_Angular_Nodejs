import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { SharedataService } from './share/sharedata.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { NgxPaginationModule} from 'ngx-pagination';



import { AdminModule } from './Admin/Admin.Module';
import { CourseModule } from './Admin/Course/Course.Module';
import { ShareModule } from './share/share.module';
import { CourseDetailComponent } from './Admin/Course/course-detail/course-detail.component';

// import { HomePageModule } from './HomePage/HomePage.module';













@NgModule({
  declarations: [
    AppComponent,
    CourseDetailComponent,
  ],
  imports: [  
    ShareModule,
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
  providers: [SharedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
