import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ColorDirective, ListTypeDirective } from "./directives/item-directives";
import { ItemComponent } from "./item/item.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  declarations: [AppComponent, ItemComponent, ListComponent, ColorDirective, ListTypeDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
