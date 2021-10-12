import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';

@Component({
  selector: 'app-voucher-table',
  templateUrl: './voucher-table.component.html',
  styleUrls: ['./voucher-table.component.css']
})
export class VoucherTableComponent extends BaseComponent implements OnInit, AfterViewInit  {

  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit(): void {
   
  }
 ngAfterViewInit() { 
    this.loadScripts(); 
  }

}
