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
  // @1 reading `ElementRef`
  @ContentChild(ItemComponent, { read: ElementRef }) item!: ElementRef<HTMLElement>;

  /********************************/

  // @2 reading directive named `ColorDirective`
  // @ContentChild(ItemComponent, { read: ColorDirective }) item!: ColorDirective;

  /********************************/

  // @3 reading directive named `ListTypeDirective`
  // @ContentChild(ItemComponent, { read: ListTypeDirective }) item!: ListTypeDirective;

  /********************************/

  // @4 reading string token `id`
  // @ContentChild(ItemComponent, { read: "id" }) item!: string;

  /********************************/

  // @5 reading string token `title`
  // @ContentChild(ItemComponent, { read: "title" }) item!: string;

  /********************************/

  // @6 reading service `ItemService`
  // @ContentChild(ItemComponent, { read: ItemService }) item!: ItemService;

  /********************************/

  // @7 reading `ItemComponent` query via TemplateRef `namedItem`
  // the read option is default to `ItemComponent`
  // @ContentChild("namedItem") item!: ItemComponent;

  constructor() {}

  ngAfterContentInit(): void {
    // @1 `ElementRef`
    // optional, we need to enable the ViewEncapsulation.NONE for class to take the effect on component
    this.item.nativeElement.classList.add("text-blue");

    /********************************/

    // @2 `ColorDirective`
    // this.item.apply("green");

    /********************************/

    // @3 `ListTypeDirective`
    // this.item.apply(LIST_TYPE.DASH);

    /********************************/

    // @4 token `id`
    // console.log(this.item);

    /********************************/

    // @5 token `title`
    // console.log(this.item);
    /********************************/

    // @6 `ItemService`
    // this.item.getItems().subscribe(console.log);

    /********************************/

    // @7 `ItemComponent`
    // console.log(this.item.value);
  }
}
