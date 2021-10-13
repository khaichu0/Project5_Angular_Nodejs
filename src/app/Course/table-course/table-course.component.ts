import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { SharedataService } from '../../share/sharedata.service';
import { Course } from './course';

@Component({
  selector: 'app-table-course',
  templateUrl: './table-course.component.html',
  styleUrls: ['./table-course.component.css'],
})
export class TableCourseComponent implements OnInit {
  active=false;
  stt=0;
  submit!:string;
  p:any
  course:any;
  courseData:Course=new Course();
  formvalue!:FormGroup;
  constructor(private shareData: SharedataService, private formbuilder:FormBuilder) {}
  ngOnInit(): void {
    this.formvalue=this.formbuilder.group({
      item_id:[""],
      item_name:[""],
      item_group_id:[''],
      item_price:0,
      item_image:['']
    });
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
      this.formvalue.patchValue({
        item_name:"",
        item_group_id:"",
        item_price:0,
        item_image:"",
        })
       this.submit="Thêm mới"
  }
  editCourseData(val:any){
    this.formvalue.patchValue({
      item_id:val.item_id,
      item_name:val.item_name,
      item_group_id:val.item_group_id,
      item_price:val.item_price,
      item_image:val.item_image,
    });
    this.submit="Sửa thông tin";

    
  }

  deleteCourseData(val:any){
    if(confirm("are you sure?")){
      this.shareData.deleteCourse(val.item_id).subscribe(data=>{console.log(JSON.stringify(data))});
      alert("Delete successfull");
    }
    
  }
  submitCourse(){
    if(this.submit==="Thêm mới"){
      try {
        alert(JSON.stringify(this.formvalue.getRawValue()));
        this.shareData.postCourse(this.formvalue.getRawValue());
      } catch (error) {
        console.log(error);
        
      }
     

    }
    else{
      alert(" edit success");
    }
    
  }
 
  




}
