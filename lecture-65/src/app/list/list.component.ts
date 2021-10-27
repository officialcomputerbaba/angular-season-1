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
  // @1 query using TemplateRef `namedItem` and read `title` values
  @ViewChildren("namedItem", { read: "title" }) items!: QueryList<string>;

  /********************************/

  // @2 query using string token `id` and read `id` values
  // read option default to `id`
  // @ViewChildren("id") items!: QueryList<string>;

  /********************************/

  // @3 query using string token `title` and read `ItemComponent`
  // @ViewChildren("title", { read: ItemComponent }) items!: QueryList<ItemComponent>;

  /********************************/

  // @4 query using `ColorDirective` and read `ColorDirective`
  // read option default to `ColorDirective`
  // @ViewChildren(ColorDirective) items!: QueryList<ColorDirective>;

  /********************************/

  // @5 query using `ListTypeDirective` and read `ElementRef`
  // @ViewChildren(ListTypeDirective, { read: ElementRef }) items!: QueryList<ElementRef<HTMLElement>>;

  /********************************/

  // @6 query using `ItemService` and read `ItemService`
  // read option default to `ItemService`
  // @ViewChildren(ItemService) items!: QueryList<ItemService>;

  /********************************/

  // @7 query using `ItemService` and read `ListTypeDirective`
  // @ViewChildren(ItemService, { read: ListTypeDirective }) items!: QueryList<ListTypeDirective>;

  constructor() {}

  ngAfterViewInit(): void {
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
    // this.items.forEach((item) => item.nativeElement.classList.add("text-blue"));

    /********************************/

    // @6 `ItemService`
    // this.items.forEach((item) => item.getItems().subscribe(console.log));

    /********************************/

    // @7 `ListTypeDirective`
    // watch video `https://youtu.be/4nYlO9TsK60` to know more
    // const types = [LIST_TYPE.DASH, LIST_TYPE.BULLET];
    // this.items.forEach((listType, index) => {
    //   setTimeout(() => {
    //     listType.apply(types[index]);
    //   });
    // });
  }
}
