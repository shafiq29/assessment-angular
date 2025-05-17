// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseCatalogComponent } from './features/courses/course-catalog/course-catalog.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MyLearningComponent } from './features/my-learning/my-learning.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCatalogComponent, // ✅ Declare all non-standalone components here
    MyLearningComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
 
  // Standalone components can be imported directly in the imports array
  bootstrap: [AppComponent]
})
export class AppModule {}
