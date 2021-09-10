import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCourseContentComponent } from './table-course-content.component';

describe('TableCourseContentComponent', () => {
  let component: TableCourseContentComponent;
  let fixture: ComponentFixture<TableCourseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCourseContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCourseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
