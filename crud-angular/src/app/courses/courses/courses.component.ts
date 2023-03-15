import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  public courses$: Observable<Course[]>;
  public displayedColumns: String[] = ['name', 'category'];

  constructor(private readonly _coursesService: CoursesService) {
    this.courses$ = this._coursesService.getList();
  }

  ngOnInit(): void {}
}
