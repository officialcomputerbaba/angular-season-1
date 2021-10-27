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
  // @1 reading `ElementRef`
  @ViewChild(ItemComponent, { read: ElementRef }) item!: ElementRef<HTMLElement>;

  /********************************/

  // @2 reading directive named `ColorDirective`
  // @ViewChild(ItemComponent, { read: ColorDirective }) item!: ColorDirective;

  /********************************/

  // @3 reading directive named `ListTypeDirective`
  // @ViewChild(ItemComponent, { read: ListTypeDirective }) item!: ListTypeDirective;

  /********************************/

  // @4 reading string token `id`
  // @ViewChild(ItemComponent, { read: "id" }) item!: string;

  /********************************/

  // @5 reading string token `title`
  // @ViewChild(ItemComponent, { read: "title" }) item!: string;

  /********************************/

  // @6 reading service `ItemService`
  // @ViewChild(ItemComponent, { read: ItemService }) item!: ItemService;

  /********************************/

  // @7 reading `ItemComponent` query via TemplateRef `namedItem`
  // the read option is default to `ItemComponent`
  // @ViewChild("namedItem") item!: ItemComponent;

  constructor() {}

  ngAfterViewInit(): void {
    // @1 `ElementRef`
    this.item.nativeElement.classList.add("text-blue");

    /********************************/

    // @2 `ColorDirective`
    // this.item.apply("green");

    /********************************/

    // @3 `ListTypeDirective`
    // watch video `https://youtu.be/4nYlO9TsK60` to know more
    // setTimeout(() => {
    //   this.item.apply(LIST_TYPE.DASH);
    // });

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
