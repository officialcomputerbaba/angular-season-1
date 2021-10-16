import { AfterViewChecked, Component, ViewChild } from "@angular/core";
import { of } from "rxjs";
import { POST_TYPE } from "../interfaces";
import { PostComponent } from "../post/post.component";

function isAuthorizedId(id: number) {
  const validIds = [1, 4, 2, 7, 9, 3];

  return of(validIds.includes(id));
}

@Component({
  selector: "app-photo-card",
  templateUrl: "./photo-card.component.html",
  styleUrls: ["./photo-card.component.css"],
})
export class PhotoCardComponent implements AfterViewChecked {
  id: number | undefined;

  canDisplayPosts = false;

  @ViewChild(PostComponent) postCmp!: PostComponent;

  constructor() {}

  onIdChange(id: string) {
    if (!id || !id.trim().length) {
      return;
    }

    this.id = +id;

    // it can be your own validation/authorization logic
    isAuthorizedId(this.id).subscribe((isAuth) => {
      this.canDisplayPosts = isAuth;
    });
  }

  ngAfterViewChecked() {
    if (!this.postCmp && this.id) {
      // important to place this statment inside timeout, otherwise will cause ExpressionChangedError
      setTimeout(() => {
        this.id = undefined;
      });
    }

    if (this.postCmp && this.postCmp?.postOptions?.id !== this.id) {
      this.postCmp.getPosts({
        id: this.id,
        type: POST_TYPE.PHOTO,
      });
    }
  }
}
