import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { fromEvent, Subscription } from "rxjs";
import { map } from "rxjs/operators";

function clickAnalytics() {
  const productClass = "product";

  return fromEvent(document, "click").pipe(
    map((evt: Event) => {
      const target = evt.target as HTMLElement;

      const parent = target.parentElement;

      let isProductFound = false;

      if (!target || !parent) {
        return isProductFound;
      }

      isProductFound = target.classList.contains(productClass) || parent.classList.contains(productClass);

      if (isProductFound) {
        console.log("PRODUCT FOUND: Sending Analytics");
      } else {
        console.log("PRODUCT NOT FOUND");
      }

      return isProductFound;
    })
  );
}

@Component({
  selector: "app-latest-products",
  templateUrl: "./latest-products.component.html",
  styleUrls: ["./latest-products.component.css"],
})
export class LatestProductsComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  products = [
    {
      name: "Mac M1 max",
      price: 4999,
      image: `https://picsum.photos/id/119/200`,
    },
    {
      name: "Meta verse",
      price: 300,
      image: `https://picsum.photos/id/129/200`,
    },
  ];

  constructor() {}

  ngOnInit() {
    this.runAnalytics();
  }

  private runAnalytics() {
    this.subscription = clickAnalytics().subscribe();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
