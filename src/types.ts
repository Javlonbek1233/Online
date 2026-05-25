/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  title: string;
  bio: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  coursesCount: number;
  achievements: string[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string; // e.g., "12:15"
  videoUrl: string; // e.g., "https://www.w3schools.com/html/mov_bbb.mp4" (sample mp4)
  isCompleted?: boolean;
  isFreePreview?: boolean;
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option (0-3)
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  description: string;
  longDescription: string;
  rating: number;
  reviewsCount: number;
  duration: string; // e.g., "14h 45m"
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  category: string;
  price: number; // 0 for free
  isBestSeller?: boolean;
  skillsLearned: string[];
  requirements: string[];
  instructor: Instructor;
  chapters: Chapter[];
  reviews: Review[];
  quiz?: Quiz;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  coverImage: string;
  date: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  category: string;
  readTime: string;
}

export interface UserEnrollment {
  progress: number; // 0 to 100
  completedLessons: string[]; // List of lesson IDs completed
  quizScore?: number; // Score in percent, if completed
  dateEnrolled: string;
  completed?: boolean;
}

export interface UserCertificate {
  id: string;
  courseId: string;
  courseTitle: string;
  dateEarned: string;
  credentialId: string;
  recipientName: string;
  instructorName: string;
}

export interface UserProfile {
  email: string;
  fullName: string;
  avatar: string;
  role?: string;
  enrolledCourses: { [courseId: string]: UserEnrollment };
  badges: string[];
  hoursWatched: number;
  certificates: UserCertificate[];
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnually: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}
