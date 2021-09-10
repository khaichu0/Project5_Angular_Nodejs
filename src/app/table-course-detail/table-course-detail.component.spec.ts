import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCourseDetailComponent } from './table-course-detail.component';

describe('TableCourseDetailComponent', () => {
  let component: TableCourseDetailComponent;
  let fixture: ComponentFixture<TableCourseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCourseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
