import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { SlidebarComponent } from '../slidebar/slidebar.component';
import { BaseComponent } from '../base/base.component';
@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent extends BaseComponent implements OnInit, AfterViewInit {
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit(): void {
   
  }
 ngAfterViewInit() { 
    this.loadScripts(); 
  }
}