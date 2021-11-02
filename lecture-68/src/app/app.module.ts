import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { UserChatFeedComponent } from "./user-chat-feed/user-chat-feed.component";

@NgModule({
  declarations: [AppComponent, UserChatFeedComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
