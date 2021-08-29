export interface Course {
  name: string;
  category: string;
  description?: string;
  id: number;
  price: number;
  currency: string;
  date: Date | string;
}
