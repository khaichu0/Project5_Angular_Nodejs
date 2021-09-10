import { Component, OnInit } from '@angular/core';
import { SlidebarComponent } from '../slidebar/slidebar.component';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
