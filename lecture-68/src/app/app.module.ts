import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { ItemComponent } from "./item/item.component";
import { ItemContainerComponent } from "./item-container/item-container.component";

@NgModule({
  declarations: [AppComponent, BreadcrumbComponent, ItemComponent, ItemContainerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
