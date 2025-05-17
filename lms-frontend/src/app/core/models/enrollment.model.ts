// enrollment.model.ts
export interface Enrollment {
    userId: string;
    courseId: string;
    status: 'enrolled' | 'completed';
    progress: number;
    enrolledAt: string;
    completedAt?: string;
}