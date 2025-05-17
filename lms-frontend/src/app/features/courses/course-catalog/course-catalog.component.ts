import { Component, OnInit } from '@angular/core';
import { Course } from '../../../core/models/course.model';

@Component({
  selector: 'app-course-catalog',
  templateUrl: './course-catalog.component.html',
  styleUrls: ['./course-catalog.component.css'],
  standalone: false,
})
export class CourseCatalogComponent implements OnInit {
  allCourses: Course[] = [];
  filteredCourses: Course[] = [];
  categories: string[] = [];

  selectedCategory = '';
  selectedStatus = '';
  selectedSort = 'title';

  ngOnInit(): void {
    const courses = localStorage.getItem('courses');
    this.allCourses = courses ? JSON.parse(courses) : [];
    this.categories = [...new Set(this.allCourses.map(c => c.category))];
    this.applyFilters();
  }

  applyFilters(): void {
    let result = [...this.allCourses];

    if (this.selectedCategory) {
      result = result.filter(c => c.category === this.selectedCategory);
    }

    if (this.selectedStatus) {
      const isFree = this.selectedStatus === 'free';
      result = result.filter(c => c.isFree === isFree);
    }

    if (this.selectedSort === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.selectedSort === 'duration') {
      result.sort((a, b) => a.duration - b.duration);
    }

    this.filteredCourses = result;
  }
}
