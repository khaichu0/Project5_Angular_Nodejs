import { Component, OnInit } from '@angular/core';
import { HinhChop, Tamgiac } from '../hinhchop';
@Component({
  selector: 'app-baitap1',
  templateUrl: './baitap1.component.html',
  styleUrls: ['./baitap1.component.css']
})
export class Baitap1Component implements OnInit {

  constructor() { }
    
   ds:any = [
    {hoten: 'Nguyen Van Nam', diemthi:9, quequan:'Hai Duong'},
    {hoten: 'Bui Thi Phuong', diemthi:7.5,quequan:'Hai Duong'},
    { hoten: 'Pham Quang Duc', diemthi:8.3, quequan:'Hai Phong'}
  ];
  arr=[1,2,3,4,5,6,7,8,9,10,11,12,13]
  ngOnInit(): void {
    console.log("Bài 1");
    this.getNum(this.arr)
    console.log("Bài 5");
    this.getSquareNum(this.arr)
    let hinhChop=new HinhChop(3,3,4);
    console.log("The tic la: "+hinhChop.TheTich())
    
  }
  getNum(arr:any):void{
    for (let i=0;i<arr.length;i++){
      if(i==2 ){
        console.log("số nguyên tố là:"+i);
      }
      else if(i>2 ){
        if(this.checkNum(i)!=0){
          console.log("số nguyên tố là:"+i);
        }
      }

    }

  }
  getSquareNum(arr:any):void{
    for(let i=0;i<arr.length;i++){
      if(i>2){
        if(this.checkSquareNum(i)){
          console.log("So chinh phuong la: "+i)
        }
      }
     
    }
  }
  checkNum(num:number){
    let passNum=0;
    for(let i=2;i<num;i++){
      if(num%i==0) {
        passNum=0;
        break;
      }
      else{
        passNum=num;
      }
      
    }
    return passNum;
    
    
  }
  checkSquareNum(num:number){
    let squareNum=false;
    let i=0;
    while (i*i<=num) {
      if(i*i==num){
        squareNum=true;
        break;
      }
      
      i++


      
    }
    return squareNum; 
  }
  
  
  


}
