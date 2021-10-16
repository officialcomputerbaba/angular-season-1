export interface Post {
  title: string;
  body: string;
  id: number;
}

export interface Photo {
  id: number;
  title: string;
  url: string;
}

export interface Comment {
  id: number;
  email: string;
  body: string;
}

export type UserPost = Photo | Post | Comment;
