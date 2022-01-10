import { Component } from "@angular/core";

export interface Product {
  name: string;
  price: number;
  hours: number;
}

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent {
  products: Product[] = [
    { name: "Bug Fix", price: 20, hours: 1 },
    { name: "Patch", price: 120, hours: 4 },
    { name: "Crack", price: 50, hours: 2 },
  ];

  constructor() {}

  findMax(products: Product[], key: keyof Product) {
    console.log("Max called");
    return Math.max(...(products.map((p) => p[key]) as number[])) || undefined;
  }
}
