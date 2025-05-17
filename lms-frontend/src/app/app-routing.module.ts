// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCatalogComponent } from './features/courses/course-catalog/course-catalog.component';
import { CourseDetailsComponent } from './features/courses/course-details/course-details.component';
import { MyLearningComponent } from './features/my-learning/my-learning.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CourseCatalogComponent },
  {
    path: 'courses/:id',
    component: CourseDetailsComponent
  },
  { path: 'my-learning', component: MyLearningComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
