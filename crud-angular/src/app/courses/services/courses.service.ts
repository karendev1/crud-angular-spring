import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Course } from './../models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/courses.json';
  constructor(private readonly _httpClient: HttpClient) {}

  public getList() {
    return this._httpClient.get<Course[]>(this.API).pipe(
      first(),
      delay(5000),
      tap((courses) => console.log(courses))
    );
  }
}
