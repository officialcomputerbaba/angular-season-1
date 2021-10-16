import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { PhotoCardComponent } from "./photo-card/photo-card.component";
import { PostCardComponent } from "./post-card/post-card.component";
import { PostComponent } from "./post/post.component";

@NgModule({
  declarations: [AppComponent, PostComponent, PostCardComponent, PhotoCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
