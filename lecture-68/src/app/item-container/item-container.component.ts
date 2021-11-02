import { Component } from "@angular/core";

@Component({
  selector: "app-item-container",
  templateUrl: "./item-container.component.html",
  styleUrls: ["./item-container.component.css"],
})
export class ItemContainerComponent {
  items: string[] = [];

  addItem(name: string): void {
    if (this.items.includes(name)) {
      return;
    }

    this.items.push(name);
  }

  removeItem(itemIndex: number): void {
    this.items.splice(itemIndex, 1);
  }
}
