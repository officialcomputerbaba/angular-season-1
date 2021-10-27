import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  QueryList,
  ElementRef,
  ViewEncapsulation,
} from "@angular/core";
import { ColorDirective, ListTypeDirective } from "../directives/item-directives";
import { LIST_TYPE } from "../enum";
import { ItemComponent, ItemService } from "../item/item.component";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  // NOTE: it is optional and only used to apply the class effect using ElementRef
  encapsulation: ViewEncapsulation.None,
})
export class ListComponent implements AfterContentInit {
  // @1 query using TemplateRef `namedItem` and read `title` values
  @ContentChildren("namedItem", { read: "title" }) items!: QueryList<string>;

  /********************************/

  // @2 query using string token `id` and read `id` values
  // read option default to `id`
  // @ContentChildren("id") items!: QueryList<string>;

  /********************************/

  // @3 query using string token `title` and read `ItemComponent`
  // @ContentChildren("title", { read: ItemComponent }) items!: QueryList<ItemComponent>;

  /********************************/

  // @4 query using `ColorDirective` and read `ColorDirective`
  // read option default to `ColorDirective`
  // @ContentChildren(ColorDirective) items!: QueryList<ColorDirective>;

  /********************************/

  // @5 query using `ListTypeDirective` and read `ElementRef`
  // @ContentChildren(ListTypeDirective, { read: ElementRef }) items!: QueryList<ElementRef<HTMLElement>>;

  /********************************/

  // @6 query using `ItemService` and read `ItemService`
  // read option default to `ItemService`
  // @ContentChildren(ItemService) items!: QueryList<ItemService>;

  /********************************/

  // @7 query using `ItemService` and read `ListTypeDirective`
  // @ContentChildren(ItemService, { read: ListTypeDirective }) items!: QueryList<ListTypeDirective>;

  constructor() {}

  ngAfterContentInit(): void {
    // @1 token `title`
    this.items.forEach((item) => console.log(item));

    /********************************/

    // @2 token `id`
    // this.items.forEach((item) => console.log(item));

    /********************************/

    // @3 `ItemComponent`
    // this.items.forEach((item) => console.log(item.value));

    /********************************/

    // @4 `ColorDirective`
    // const colors = ["red", "green"];
    // this.items.forEach((color, index) => color.apply(colors[index]));

    /********************************/

    // @5 `ElementRef`
    // optional, we need to enable the ViewEncapsulation.NONE for class to take the effect on component
    // this.items.forEach((item) => item.nativeElement.classList.add("text-blue"));

    /********************************/

    // @6 `ItemService`
    // this.items.forEach((item) => item.getItems().subscribe(console.log));

    /********************************/

    // @7 `ListTypeDirective`
    // const types = [LIST_TYPE.DASH, LIST_TYPE.BULLET];
    // this.items.forEach((listType, index) => listType.apply(types[index]));
  }
}
