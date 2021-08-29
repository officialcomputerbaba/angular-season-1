export interface Course {
  name: string;
  category: string;
  description?: string;
  id: number;
  price: number;
  currency: string;
  date: Date | string;
}

export interface CourseSaleEvent {
  isOnSale: boolean;
  course: Course;
}
