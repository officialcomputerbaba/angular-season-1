import { AfterViewInit, Component, ViewChild, ElementRef } from "@angular/core";
import { ColorDirective, ListTypeDirective } from "../directives/item-directives";
import { LIST_TYPE } from "../enum";
import { ItemComponent, ItemService } from "../item/item.component";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements AfterViewInit {
  // @1 query using TemplateRef `namedItem` and read `id`
  @ViewChild("namedItem", { read: "id" }) item!: string;

  /********************************/

  // @2 query using string token `id` and read `ItemService`
  // @ViewChild("id", { read: ItemService }) item!: ItemService;

  /********************************/

  // @3 query using string token `title` and read `ItemComponent`
  // @ViewChild("title", { read: ItemComponent }) item!: ItemComponent;

  /********************************/

  // @4 query using `ColorDirective` and read string token `id`
  // @ViewChild(ColorDirective, { read: "id" }) item!: string;

  /********************************/

  // @5 query using `ListTypeDirective` and read `ColorDirective`
  // @ViewChild(ListTypeDirective, { read: ColorDirective }) item!: ColorDirective;

  /********************************/

  // @6 query using `ItemService` and read `ElementRef`
  // @ViewChild(ItemService, { read: ElementRef }) item!: ElementRef<HTMLElement>;

  constructor() {}

  ngAfterViewInit(): void {
    // @1 token `id`
    console.log(this.item);

    /********************************/

    // @2 `ItemService`
    // this.item.getItems().subscribe(console.log);

    /********************************/

    // @3 `ItemComponent`
    // console.log(this.item.value);

    /********************************/

    // @4 token `id`
    // console.log(this.item);

    /********************************/

    // @5 `ColorDirective`
    // this.item.apply();

    /********************************/

    // @6 `ElementRef`
    // this.item.nativeElement.classList.add("text-blue");
  }
}
