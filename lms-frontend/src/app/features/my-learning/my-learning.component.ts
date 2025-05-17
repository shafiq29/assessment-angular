import { Component, OnInit } from '@angular/core';

interface Course {
  id: string;
  title: string;
  // ... other course fields
}

interface Enrollment {
  userId: string;
  courseId: string;
  status: 'enrolled' | 'completed';
  progress: number;
  enrolledAt: string;
  completedAt?: string;
}

interface LocalStorageData {
  user: any;
  courses: Course[];
  enrollments: Enrollment[];
}

@Component({
  selector: 'app-my-learning',
  templateUrl: './my-learning.component.html',
  standalone: false,
})
export class MyLearningComponent implements OnInit {
  enrolledCourses: (Enrollment & { title: string })[] = [];

  ngOnInit(): void {
    const data: LocalStorageData = JSON.parse(localStorage.getItem('enrollments') || '{}');
    data.user = JSON.parse(localStorage.getItem('user') || '{}');
    
    this.enrolledCourses = JSON.parse(localStorage.getItem('enrollments') || '{}');
    console.log(this.enrolledCourses);

  // updateProgress(enrollment: Enrollment & { title: string }, newProgress: number) {
  //   const data: LocalStorageData = JSON.parse(localStorage.getItem('lmsData') || '{}');
  //   const index = data.enrollments.findIndex(
  //     (e) => e.userId === enrollment.userId && e.courseId === enrollment.courseId
  //   );

  //   if (index !== -1) {
  //     data.enrollments[index].progress = newProgress;
  //     if (newProgress >= 100 && data.enrollments[index].status !== 'completed') {
  //       data.enrollments[index].status = 'completed';
  //       data.enrollments[index].completedAt = new Date().toISOString();
  //     }
  //     localStorage.setItem('lmsData', JSON.stringify(data));
  //   }

  //   this.ngOnInit(); // Refresh UI
  // }
}
}
