import { Injectable } from '@angular/core';
import { LocalStorageData } from '../models/local-storage-data.model';
import { v4 as uuidv4 } from 'uuid'; // Use uuid for unique IDs (install with `npm i uuid`)

@Injectable({
  providedIn: 'root'
})
export class SeedService {
  private defaultData: LocalStorageData = {
    user: {
      // userId: uuidv4(),
      userId: '123e4567-e89b-12d3-a456-426614174000',
      name: 'Default User',
      email: 'user@example.com',
      preferences: {
        preferredCategories: ['Programming'],
        notifications: true
      }
    },
    courses: [
      {
        id: 'course1',
        title: 'Intro to JavaScript',
        description: 'Learn the fundamentals of JavaScript.',
        category: 'Programming',
        isFree: true,
        prerequisites: [],
        duration: 4
      },
      {
        id: 'course2',
        title: 'Advanced CSS',
        description: 'Master modern CSS techniques.',
        category: 'Design',
        isFree: false,
        prerequisites: [],
        duration: 5
      },
      {
        id: 'course3',
        title: 'React for Beginners',
        description: 'Build UIs with React from scratch.',
        category: 'Programming',
        isFree: true,
        prerequisites: ['course1'],
        duration: 6
      },
      {
        id: 'course4',
        title: 'UX Design Principles',
        description: 'Understand the core of user experience.',
        category: 'Design',
        isFree: true,
        prerequisites: [],
        duration: 3
      },
      {
        id: 'course5',
        title: 'Node.js APIs',
        description: 'Build REST APIs with Node.js.',
        category: 'Programming',
        isFree: false,
        prerequisites: ['course1'],
        duration: 7
      }
    ],
    enrollments: []
  };

  initializeLocalStorage(): void {
    if (!localStorage.getItem('user') || !localStorage.getItem('courses') || !localStorage.getItem('enrollments')) {
      const { user, courses, enrollments } = this.defaultData;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('courses', JSON.stringify(courses));
      localStorage.setItem('enrollments', JSON.stringify(enrollments));
    }
  }
}
