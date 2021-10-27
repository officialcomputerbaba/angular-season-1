import { AfterContentInit, Component, ContentChild, ContentChildren, QueryList, ElementRef } from "@angular/core";
import { ColorDirective, ListTypeDirective } from "../directives/item-directives";
import { LIST_TYPE } from "../enum";
import { ItemComponent, ItemService } from "../item/item.component";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements AfterContentInit {
  // NOTE: check the `app.component.html` and `item.component.html`

  // @1 query using `ItemComponent`
  @ContentChildren(ItemComponent, { descendants: true }) items!: QueryList<ItemComponent>;

  /********************************/

  // @2 query using string token `id` and `title`, read their string values
  @ContentChildren("id,title", { descendants: true }) items!: QueryList<string>;

  /********************************/

  // @3 query using string token `id` and `title`, read `ItemComponent`
  @ContentChildren("id,title", { descendants: true, read: ItemComponent }) items!: QueryList<ItemComponent>;

  /********************************/

  // @4 query using TemplateRef 'namedItem' and 'item', read `ItemComponent`
  @ContentChildren("namedItem,item", { descendants: true }) items!: QueryList<ItemComponent>;

  constructor() {}

  ngAfterContentInit(): void {
    // @1 `ItemComponent`
    // this.items.forEach((item) => console.log(item));
    /********************************/
    // @2 token `id` and `title` values
    // this.items.forEach((item) => console.log(item));
    /********************************/
    // @3 ItemComponent
    // this.items.forEach((item) => console.log(item));
    /********************************/
    // @4 ItemComponent
    // this.items.forEach((item) => console.log(item));
  }
}
