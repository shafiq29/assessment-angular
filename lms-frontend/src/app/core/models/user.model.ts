// user.model.ts
export interface User {
    userId: string;
    name: string;
    email: string;
    preferences: {
      preferredCategories: string[];
      notifications: boolean;
    };
}