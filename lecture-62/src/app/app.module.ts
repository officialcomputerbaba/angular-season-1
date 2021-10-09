import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent, ImgPreviewDirective } from "./app.component";

@NgModule({
  declarations: [AppComponent, ImgPreviewDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
