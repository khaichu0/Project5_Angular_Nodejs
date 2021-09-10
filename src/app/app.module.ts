import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SharedataService } from './share/sharedata.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Baitap1Component } from './baitap1/baitap1.component';




@NgModule({
  declarations: [
    AppComponent,
    Baitap1Component,

  ],
  imports: [  
   CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [SharedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
