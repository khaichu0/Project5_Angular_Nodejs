import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  item_id:any;
  ngOnInit(): void {
    let _id=this.route.snapshot.paramMap.get('id');
    this.item_id=_id;
  }

}
