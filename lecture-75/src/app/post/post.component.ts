import { Component, Input, OnInit } from "@angular/core";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPostById(id: number | string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const post = await response.json();

  return post;
}

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  @Input()
  id!: number | string;

  post!: Post;

  post$!: Promise<Post>;

  constructor() {}

  ngOnInit(): void {
    this.post$ = getPostById(this.id);
  }
}
