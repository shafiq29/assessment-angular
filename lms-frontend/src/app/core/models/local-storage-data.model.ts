import { Course } from "./course.model";
import { Enrollment } from "./enrollment.model";
import { User } from "./user.model";

// local-storage-data.model.ts
export interface LocalStorageData {
    courses: Course[];
    enrollments: Enrollment[];
    user: User;
}