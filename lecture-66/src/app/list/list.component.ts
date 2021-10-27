import { AfterContentInit, Component, ContentChild, ElementRef, ViewEncapsulation } from "@angular/core";
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
  // @1 query using TemplateRef `namedItem` and read `id`
  @ContentChild("namedItem", { read: "id" }) item!: string;

  /********************************/

  // @2 query using string token `id` and read `ItemService`
  // @ContentChild("id", { read: ItemService }) item!: ItemService;

  /********************************/

  // @3 query using string token `title` and read `ItemComponent`
  // @ContentChild("title", { read: ItemComponent }) item!: ItemComponent;

  /********************************/

  // @4 query using `ColorDirective` and read string token `id`
  // @ContentChild(ColorDirective, { read: "id" }) item!: string;

  /********************************/

  // @5 query using `ListTypeDirective` and read `ColorDirective`
  // @ContentChild(ListTypeDirective, { read: ColorDirective }) item!: ColorDirective;

  /********************************/

  // @6 query using `ItemService` and read `ElementRef`
  // @ContentChild(ItemService, { read: ElementRef }) item!: ElementRef<HTMLElement>;

  constructor() {}

  ngAfterContentInit(): void {
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
    // optional, we need to enable the ViewEncapsulation.NONE for class to take the effect on component
    // this.item.nativeElement.classList.add("text-blue");
  }
}
