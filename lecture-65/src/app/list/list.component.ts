import { AfterViewInit, Component, ViewChild, ElementRef, QueryList, ViewChildren } from "@angular/core";
import { ColorDirective, ListTypeDirective } from "../directives/item-directives";
import { LIST_TYPE } from "../enum";
import { ItemComponent, ItemService } from "../item/item.component";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements AfterViewInit {
  // @1 query using string token `id` and `title`, read their string values
  @ViewChildren("id,title") items!: QueryList<string>;

  /********************************/

  // @2 query using string token `id` and `title`, read `ItemComponent`
  // @ViewChildren("id,title", { read: ItemComponent }) items!: QueryList<ItemComponent>;

  /********************************/

  // @3 query using TemplateRef 'namedItem' and 'item', read `ItemComponent`
  // in `list.component.html` uncomment the @3,@4 and comment the @1,@2
  // @ViewChildren("namedItem,item") items!: QueryList<ItemComponent>;

  /********************************/

  // @4 query using TemplateRef 'namedItem' and 'item', read string token `id`
  // in `list.component.html` uncomment the @3,@4 and comment the @1,@2
  // @ViewChildren("namedItem,item", { read: "id" }) items!: QueryList<string>;

  constructor() {}

  ngAfterViewInit(): void {
    // @1 token `id` and `title` values
    this.items.forEach((item) => console.log(item));

    /********************************/

    // @2 `ItemComponent`
    // this.items.forEach((item) => console.log(item.value));

    /********************************/

    // @3 `ItemComponent`
    // this.items.forEach((item) => console.log(item.value));

    /********************************/

    // @4 token`id` values
    // this.items.forEach((item) => console.log(item));
  }
}
