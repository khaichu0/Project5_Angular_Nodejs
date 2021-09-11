import { Component, OnInit,EventEmitter,Input } from '@angular/core';
import { Course } from '../table-course/course';
import { SharedataService } from '../share/sharedata.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-or-edit-course',
  templateUrl: './add-or-edit-course.component.html',
  styleUrls: ['./add-or-edit-course.component.css']
})
export class AddOrEditCourseComponent implements OnInit {

  constructor(private service :SharedataService , private formbuilder:FormBuilder) {  }
 
  @Input () course:any;
  @Input() submit?:string;

  ngOnInit(): void {
    
    }
    
  
  courseSubmit():void {

  }

}
