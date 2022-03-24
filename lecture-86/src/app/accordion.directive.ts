import { Directive, QueryList, ViewChildren } from "@angular/core";
import { TabComponent } from "./tab/tab.component";

@Directive({
  selector: "[accordion]",
})
export class AccordionDirective {
  @ViewChildren(TabComponent) vtabs!: QueryList<TabComponent>;

  ngAfterViewInit() {
    console.log("View initialized in directive");
    // ViewChildren query will not get execute in directive and hence `QueryList` is undefined
    console.log(this.vtabs);
  }
}
