import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { SharedataService } from '../share/sharedata.service';
import { Course } from './course';

@Component({
  selector: 'app-table-course',
  templateUrl: './table-course.component.html',
  styleUrls: ['./table-course.component.css'],
})
export class TableCourseComponent implements OnInit {
  active=false;
  stt=0;
  submit="Thêm mới"
  p:any
  course:any;
  courseData:any;
  constructor(private shareData: SharedataService,private formbuilder:FormBuilder) { }
  
  ngOnInit(): void {
    this.getCoursedata();
    
  }
  getCoursedata(): void{
    this.shareData.getCourse().subscribe(
      data=>{
        this.course=data;
      },
      error=>{
        console.log("Error: "+JSON.stringify(error) );
      })
  }
  refesCourseData(){
    this.courseData={
    item_name:"",
    item_grou_id:"",
    item_price:0,
    item_image:"",
    } 
    this.active=true;
    this.submit="Thêm mới"
    console.log(this.courseData)
  }
  editCourse(val:any){
    this.courseData=val;
    this.active=true;
    this.submit="Sửa thông tin";
    console.log(val);
  }

  deleteCourse(val:any){
    if(confirm("are you sure?")){
      this.shareData.deleteCourse(val.item_id).subscribe(data=>{console.log(JSON.stringify(data))});
      alert("Delete successfull");
    }
    
  }
 
  




}
