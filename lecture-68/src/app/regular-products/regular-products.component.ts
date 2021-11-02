import { Component } from "@angular/core";

@Component({
  selector: "app-regular-products",
  templateUrl: "./regular-products.component.html",
  styleUrls: ["./regular-products.component.css"],
})
export class RegularProductsComponent {
  products = [
    {
      name: "Shiny Shampoo",
      image: `https://picsum.photos/seed/db/200`,
    },
    {
      name: "Dune Book",
      image: `https://picsum.photos/seed/ss/200`,
    },
  ];
}
