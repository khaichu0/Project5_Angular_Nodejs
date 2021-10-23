import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  data!: Product[];
  ma_san_pham:any;
  ten_san_pham:any;
  original_data: any;
  constructor() { }

  ngOnInit(): void {
    this.data = [{code:'001',name:'Sản phẩm 1',dvt:'cái',gia:85 },
    {code:'002',name:'Sản phẩm 2',dvt:'cái',gia:632 },
    {code:'003',name:'Sản phẩm 3',dvt:'cái',gia:532 }
  ];
    this.data.push({code:'004',name:'Sản phẩm 4',dvt:'cái',gia:7433 });
    this.original_data = $.extend(true, [], this.data);
  } 
  public TimKiem() {
    if(this.ma_san_pham != null && this.ma_san_pham != '') {
      this.data = this.original_data.filter((x: { code: string | any[]; })=>x.code.indexOf(this.ma_san_pham)>=0);
    } else  if(this.ten_san_pham != null && this.ten_san_pham != '') {
      this.data = this.original_data.filter((x: { name: string | any[]; })=>x.name.indexOf(this.ten_san_pham)>=0);
    } else { 
      this.data = $.extend(true, [], this.original_data);
    } 
  }
} 
export interface Product {
  code: any;
  name: any;
  dvt: any;
  gia: any;	
}
