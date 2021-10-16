import { Component } from "@angular/core";
import { POST_TYPE } from "../interfaces";

@Component({
  selector: "app-post-card",
  templateUrl: "./post-card.component.html",
  styleUrls: ["./post-card.component.css"],
})
export class PostCardComponent {
  postOptions = {
    id: 5,
    type: POST_TYPE.POST,
  };
}
