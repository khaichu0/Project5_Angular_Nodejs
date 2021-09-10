import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedataService } from '../share/sharedata.service';
import { Course } from './course';

@Component({
  selector: 'app-table-course',
  templateUrl: './table-course.component.html',
  styleUrls: ['./table-course.component.css'],
})
export class TableCourseComponent implements OnInit {
  submit="thêm mới"
  course:any;
  constructor(private shareData: SharedataService) { }

  ngOnInit(): void {
    this.getCoursedata()
  
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
    
  }
  editCourse(){

  }
  deleteCourse(){
    
  }

}
