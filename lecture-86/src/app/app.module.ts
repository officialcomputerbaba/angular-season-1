import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AccordionDirective } from "./accordion.directive";

import { AppComponent } from "./app.component";
import { TabComponent } from "./tab/tab.component";

@NgModule({
  declarations: [AppComponent, AccordionDirective, TabComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
