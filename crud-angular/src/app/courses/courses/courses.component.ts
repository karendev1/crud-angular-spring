import { Component, OnInit } from '@angular/core';

import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  public courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'Front-end' },
  ];
  public displayedColumns: String[] = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {}
}
