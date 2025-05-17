import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  isFree: boolean;
  prerequisites: string[];
  duration: number;
}

interface Enrollment {
  userId: string;
  courseId: string;
  status: 'enrolled' | 'completed';
  progress: number;
  enrolledAt: string;
  completedAt?: string;
}

interface User {
  userId: string;
  name: string;
  email: string;
  preferences: { preferredCategories: string[]; notifications: boolean; };
}

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
  standalone: false,
})
export class CourseDetailsComponent implements OnInit {
  course: Course | undefined;
  user: User | null = null;
  enrollments: Enrollment[] = [];
  canEnroll = false;
  enrollmentMessage = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (!courseId) {
      this.router.navigate(['/courses']);
      
      return;
    }

    // Load data from localStorage
    const localData = JSON.parse(localStorage.getItem('courses') || '{}');
    const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(localData);
    this.user = currentUser || null;
    this.enrollments = localData.enrollments || [];
    const courses: Course[] = localData || [];

    this.course = courses.find(c => c.id === courseId);
    console.log(this.course);
    console.log(this.user);
    // console.log(c.id);
    if (!this.course) {
      console.log('Course ID not found in route.');
      this.router.navigate(['/courses']);
      return;
    }

    // Check if already enrolled
    const enrolled = this.enrollments.find(e => e.userId === this.user?.userId && e.courseId === courseId);
    if (enrolled) {
      this.enrollmentMessage = `You are already enrolled in this course.`;
      this.canEnroll = false;
      return;
    }

    // Check prerequisites enrollment
    const unmetPrerequisites = this.course.prerequisites.filter(prereqId =>
      !this.enrollments.some(e => e.userId === this.user?.userId && e.courseId === prereqId && e.status === 'completed')
    );

    if (unmetPrerequisites.length > 0) {
      this.enrollmentMessage = `Please complete all prerequisite courses before enrolling.`;
      this.canEnroll = false;
    } else {
      this.canEnroll = true;
      this.enrollmentMessage = '';
    }
  }

//   enroll(): void {
//     if (!this.canEnroll || !this.user || !this.course) {
//       return;
//     }

//     // Double check no duplicate enrollment
//     const existingEnrollment = this.enrollments.find(e =>
//       e.userId === this.user?.userId && e.courseId === this.course?.id
//     );

//     if (existingEnrollment) {
//       this.enrollmentMessage = 'Already enrolled.';
//       return;
//     }

//     const newEnrollment: Enrollment = {
//       userId: this.user.userId,
//       courseId: this.course.id,
//       status: 'enrolled',
//       progress: 0,
//       enrolledAt: new Date().toISOString()
//     };

//     this.enrollments.push(newEnrollment);

//     // Save back to localStorage
//     const localData = JSON.parse(localStorage.getItem('lmsData') || '{}');
//     localData.enrollments = this.enrollments;
//     localStorage.setItem('lmsData', JSON.stringify(localData));

//     this.enrollmentMessage = 'Enrollment successful!';
//     this.canEnroll = false;
//   }
// }

enroll(): void {
  // const lmsDataUser = JSON.parse(localStorage.getItem('lmsData')!);
  const user =JSON.parse(localStorage.getItem('user')!);
  const enrollments = JSON.parse(localStorage.getItem('enrollments')!);
  const userId = user.userId;
  const courseId = 'course1'; // Replace with the actual course ID you want to enroll in

  const alreadyEnrolled = enrollments.some(
    (enrollment: any) => enrollment.userId === userId && enrollment.courseId === courseId
  );

  if (alreadyEnrolled) {
    alert('You are already enrolled in this course.');
    return;
  }

  // Check prerequisites
  // const unmetPrereqs = this.course.prerequisites.filter(prereqId =>
  //   !lmsData.enrollments.some((e: any) =>
  //     e.userId === userId &&
  //     e.courseId === prereqId &&
  //     e.status === 'completed'
  //   )
  // );

  // if (unmetPrereqs.length > 0) {
  //   alert('You must complete the prerequisites before enrolling in this course.');
  //   return;
  // }

  // Create enrollment
  const newEnrollment = {
    userId,
    courseId,
    status: 'enrolled',
    progress: 0,
    enrolledAt: new Date().toISOString(),
  };

  enrollments.push(newEnrollment);
  localStorage.setItem('enrollments', JSON.stringify(enrollments));
  alert('Enrolled successfully!');
}

}