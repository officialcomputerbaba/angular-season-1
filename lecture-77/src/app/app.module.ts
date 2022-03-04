import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FileDirective } from "./file.directive";
import { RoadComponent } from "./road/road.component";

@NgModule({
  declarations: [AppComponent, FileDirective, RoadComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
