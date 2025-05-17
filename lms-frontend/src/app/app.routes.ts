// src/app/app.routes.ts
import { Routes } from '@angular/router';
// import { renderMode } from '@angular/fire/firebase/app'; // Correct import for renderMode
// import { RenderMode } from '@angular/platform-server'; // Correct import for RenderMode
import { CourseCatalogComponent } from './features/courses/course-catalog/course-catalog.component';

export const routes: Routes = [
  {
    path: 'courses',
    component: CourseCatalogComponent,
    
  }
];