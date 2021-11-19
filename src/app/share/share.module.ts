import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {CalendarModule } from 'primeng/calendar';
import {DropdownModule } from 'primeng/dropdown';
import {InputTextModule } from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload'; 
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {SliderModule} from 'primeng/slider';
import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    PanelModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    FileUploadModule,
    DialogModule,
    ConfirmDialogModule,
    ToolbarModule,
    SliderModule,
    ToastModule
  ],
  exports:[
    
    TableModule,
    PanelModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    FileUploadModule,  
    DialogModule,
    ConfirmDialogModule,
    ToolbarModule,
    SliderModule,
    ToastModule
  ],
  providers:[
    ConfirmationService
  ]
})
export class ShareModule { }
