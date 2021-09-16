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
  formvalue!:FormGroup;
  @Input () course:any;
  @Input() submit!:string;
  courseData:Course=new Course();
  ngOnInit(): void {
    this.formvalue=this.formbuilder.group({
      item_id:[''],
      item_name:[''],
      item_group_id:[''],
      item_price:0,
      item_image:['']
    })
    
    this.checkSubmit(this.submit,this.course);
    }
    onEdit(val:any){
      this.formvalue.controls['item_id'].setValue(val.item_id);
      this.formvalue.controls['item_name'].setValue(val.item_name);
      this.formvalue.controls['item_group_id'].setValue(val.item_group_id);
      this.formvalue.controls['item_price'].setValue(val.item_price);
      this.formvalue.controls['item_image'].setValue(val.item_image);
      console.log(val);
    }
  
    courseSubmit():void {
      if(this.submit=="Thêm mới"){
        
      }
   }
  checkSubmit(sub:string,val:any): void{
  if(sub!="Thêm mới")
    {
      this.onEdit(val);

    }
  }

}
