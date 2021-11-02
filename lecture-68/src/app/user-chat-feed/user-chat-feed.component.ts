import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { interval, Subscription } from "rxjs";
import { map } from "rxjs/operators";

function fetchChatFeed(userId: number) {
  return interval(1000).pipe(map((counter) => `USER_ID ${userId} : Chat messeage ${counter}`));
}

@Component({
  selector: "app-user-chat-feed",
  templateUrl: "./user-chat-feed.component.html",
  styleUrls: ["./user-chat-feed.component.css"],
})
export class UserChatFeedComponent implements OnInit, OnDestroy {
  @Input() userId!: number;

  msgList: string[] = [];

  subscription!: Subscription;

  constructor() {}

  ngOnInit() {
    this.fetchPremierChat();
  }

  private fetchPremierChat() {
    this.subscription = fetchChatFeed(this.userId).subscribe((msg) => {
      this.msgList.push(msg);
      this.msgList = this.msgList.slice(-5);
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
