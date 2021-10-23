import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { SharedataService } from './share/sharedata.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { NgxPaginationModule} from 'ngx-pagination';
import { SharedModule } from 'primeng/api';


import { AdminModule } from './Admin/Admin.Module';
// import { HomePageModule } from './HomePage/HomePage.module';













@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [  
   CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AdminModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [SharedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
