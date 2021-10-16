import { Component } from "@angular/core";
import { POST_TYPE } from "./interfaces";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  postOptions = {
    type: POST_TYPE.ALL_POSTS,
  };

  commentOptions = {
    id: 1,
    type: POST_TYPE.COMMENT,
  };
}
