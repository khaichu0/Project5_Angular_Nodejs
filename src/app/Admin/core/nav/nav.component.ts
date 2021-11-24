import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/lib/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  name:any
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  logout() {
    this.authenticationService.logout();
  } 



}
