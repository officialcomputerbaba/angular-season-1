import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { LatestProductsComponent } from './latest-products/latest-products.component';
import { RegularProductsComponent } from './regular-products/regular-products.component';

@NgModule({
  declarations: [AppComponent, LatestProductsComponent, RegularProductsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
