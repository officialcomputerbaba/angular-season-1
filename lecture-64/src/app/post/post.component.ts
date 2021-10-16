import { Component, Input } from "@angular/core";
import { PostOptions, POST_TYPE, UserPost } from "../interfaces";
import { ajax } from "rxjs/ajax";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent {
  @Input() postOptions!: PostOptions;

  posts: UserPost[] = [];

  constructor() {}

  ngOnInit() {
    if (this.postOptions) {
      this.getPosts(this.postOptions);
    }
  }

  public getPosts(postOptions: PostOptions) {
    const { id, type: postType } = postOptions;

    if (!id && postType !== POST_TYPE.ALL_POSTS) {
      return;
    }

    let url = `https://jsonplaceholder.typicode.com`;

    switch (postType) {
      case POST_TYPE.POST:
        url += `/users/${id}/posts`;
        break;

      case POST_TYPE.PHOTO:
        url += `/users/${id}/photos`;
        break;

      case POST_TYPE.COMMENT:
        url += `/posts/${id}/comments`;
        break;

      case POST_TYPE.ALL_POSTS:
        url += `/posts`;
        break;
    }

    ajax.getJSON<UserPost[]>(url).subscribe((posts) => {
      this.postOptions = postOptions; // important to place this statment here, if move outside will cause ExpressionChangedError
      this.posts = (posts || []).slice(0, 3);
    });
  }
}
