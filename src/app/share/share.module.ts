import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    PanelModule    

  ],
  exports:[
    TableModule,
    PanelModule   
  ],
  providers:[]
})
export class ShareModule { }
