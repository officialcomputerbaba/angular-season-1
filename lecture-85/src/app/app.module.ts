import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TrimLengthDirective } from "./directives/trim-length.directive";
import { UpperCaseDirective } from "./directives/uppercase.directive";

@NgModule({
  declarations: [AppComponent, UpperCaseDirective, TrimLengthDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
