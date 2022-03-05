import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { ListDirective } from "./list.directive";

@NgModule({
  declarations: [AppComponent, ListComponent, ListDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
