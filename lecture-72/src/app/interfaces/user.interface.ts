export interface UserPicture {
  name: string;
  link: string;
}

export interface User {
  name: string;
  email: string;
  picture?: UserPicture;
}
