import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { MemoizedFnPipe } from "./pipes";
import { CompanyComponent } from "./company/company.component";
import { ProductsComponent } from './products/products.component';

const PIPES = [MemoizedFnPipe];

@NgModule({
  declarations: [AppComponent, ...PIPES, CompanyComponent, ProductsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
