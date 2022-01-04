import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { DateStatePipe } from "./pipes";

const PIPES = [DateStatePipe];

@NgModule({
  declarations: [AppComponent, ...PIPES],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
