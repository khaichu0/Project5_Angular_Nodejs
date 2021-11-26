import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { SharedataService } from 'src/app/share/sharedata.service';
import { Course } from './course';
import { Router, Routes } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-table-course',
  templateUrl:'./table-course.component.html',
  styleUrls: ['./table-course.component.css'],
})
export class TableCourseComponent implements OnInit {
  title = "cloudsSorage";
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  active=false;
  stt=0;
  submit!:string;
  p:any
  course:any;
  courseData:Course=new Course();
  formvalue!:FormGroup;
  ImageUrl:any;
  constructor(private storage: AngularFireStorage,private shareData: SharedataService, private formbuilder:FormBuilder,private router:Router) {}
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
        this.formvalue.patchValue({ item_image:this.ImageUrl });
        this.shareData.postCourse(this.formvalue.getRawValue()).subscribe(data=>{console.log(JSON.stringify(data))});
        alert(JSON.stringify("Thêm thành công"+this.formvalue.getRawValue()));
        this.shareData.postCourse(this.formvalue.getRawValue());
        this.getCoursedata();
      } catch (error) {
        console.log(error);
        
      }
    }
    else{
      this.formvalue.patchValue({ item_image:this.ImageUrl });
      this.shareData.editCourse(this.formvalue.getRawValue()).subscribe(data=>{console.log(JSON.stringify(data))});
        alert(JSON.stringify("Thêm thành công"+this.formvalue.getRawValue()));
        alert(" edit success"+this.formvalue.getRawValue());
        this.getCoursedata();

    }
    
  }
  selectDetail(item:any){
    this.router.navigate(["admin/course/detail",item.item_id]); 
  }
 
  
  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.ImageUrl= url+' ';
            }
            console.log(this.ImageUrl);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }



}
