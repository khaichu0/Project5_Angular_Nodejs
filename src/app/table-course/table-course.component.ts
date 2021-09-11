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
  submit="thêm mới"
  course:any;
  coursedata:Course= new Course();
  constructor(private shareData: SharedataService,private formbuilder:FormBuilder) { }
  formvalue!:FormGroup;
  ngOnInit(): void {
    this.formvalue=this.formbuilder.group({
      course_id:[''],
      course_name:[''],
      course_teacher:[''],
      course_group_id:[''],
      course_price:['']
      
    })
    this.getCoursedata();
  }
  getCoursedata(): void{
    this.shareData.getCourse().subscribe(
      data=>{
        this.course=data;
      },
      error=>{
        console.log("Error: "+error);
      })
  }
  postCoursedata(){
    this.course={
    course_name:"",
    course_teacher:"",
    course_group_id:"",
    course_price:0,
    course_image:"",
    } 
    this.active=true;
  }
  editCourse(){

  }
  deleteCourse(){
    
  }
  courseSubmit(){

  }

}
