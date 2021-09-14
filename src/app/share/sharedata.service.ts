import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Course } from '../table-course/course';
import {catchError, map, tap}from 'rxjs/operators/'

@Injectable({
  providedIn: 'root'
})
export class SharedataService {
  
  readonly ApiUrl='https://localhost:44378'
  constructor(private http: HttpClient )  { }
  getCourse():Observable<Course> {
    return this.http.get(this.ApiUrl+'/api/item/get-all');
  }
  postCourse( val:any):Observable<Course>{
    return this.http.post(this.ApiUrl+'/course',val);

  }
  editCourse(val:any):Observable<Course>{
    return this.http.put(this.ApiUrl+'/course',val);
  }
  deleteCourse(id_course:string):Observable<Course>{
    return this.http.delete(this.ApiUrl+'/course/'+id_course);
  }
}
