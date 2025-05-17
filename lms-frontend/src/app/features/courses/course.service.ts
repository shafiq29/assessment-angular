import { Injectable } from '@angular/core';
import { Course } from '../../core/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  getCourses(): Course[] {
    const data = localStorage.getItem('courses');
    return data ? JSON.parse(data) : [];
  }

  saveCourses(courses: Course[]): void {
    localStorage.setItem('courses', JSON.stringify(courses));
  }
}
