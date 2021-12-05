import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';

import { PillTableComponent } from './pill-table/pill-table.component';
import { AddOrEditPillComponent } from './add-or-edit-pill/add-or-edit-pill.component';
import { ShareModule } from 'src/app/share/share.module';


const route:Routes=[
    {
        //'home',component:PTB2Component
        //'home',component:WelcomeAdminComponent
        path:'',component:PillTableComponent, 
    },
    {
        path:'detail/:id',component:AddOrEditPillComponent,
    },
    
    {
        path:'**', component: PageNotFoundComponent
    }
]
@NgModule({
  declarations: [
  
  ],
  imports: [
    ShareModule,
    CommonModule,RouterModule.forChild(route)
  ],
  exports:[
      RouterModule
  ],

})
export class PillModule { }
