import { ContentChildren, Directive, QueryList, ViewChildren } from "@angular/core";
import { TabComponent } from "./tab/tab.component";

@Directive({
  selector: "[accordion]",
})
export class AccordionDirective {
  @ViewChildren(TabComponent) vtabs!: QueryList<TabComponent>;

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit() {
    console.log("Projected Content initialized in directive");
    // Directive gets children via ContentChild / ContentChildren query and hence `QueryList` has value
    console.log(this.tabs);
  }

  ngAfterViewInit() {
    console.log("View initialized in directive");
    // ViewChildren query will not get execute in directive and hence `QueryList` is undefined
    console.log(this.vtabs);
  }
}
