import { Component, Injectable, Input } from "@angular/core";
import { range } from "rxjs";
import { LIST_TYPE } from "../enum";

@Injectable()
export class ItemService {
  getItems() {
    return range(1, 11);
  }
}

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
  providers: [
    { provide: "id", useValue: "itemId" },
    { provide: "title", useValue: "A unique item title" },
    ItemService,
  ],
})
export class ItemComponent {
  @Input() value!: string;

  @Input() type: LIST_TYPE | string = LIST_TYPE.BULLET;

  constructor() {}
}
