export enum POST_TYPE {
  POST = "POST",
  PHOTO = "PHOTO",
  COMMENT = "COMMENT",
  ALL_POSTS = "ALL_POSTS",
}

export interface PostOptions {
  type: POST_TYPE | string;
  id?: number;
}
