import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CourseComponent } from "./course/course.component";
import { TutorialComponent } from "./tutorial/tutorial.component";

@NgModule({
  declarations: [AppComponent, CourseComponent, TutorialComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
