import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { SafeEmailPipe, AgePipe, TwitterPipe } from "./pipes";

const PIPES = [SafeEmailPipe, AgePipe, TwitterPipe];

@NgModule({
  declarations: [AppComponent, ...PIPES],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
