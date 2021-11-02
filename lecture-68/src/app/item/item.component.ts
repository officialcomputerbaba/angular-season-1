import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { BreadcrumbService } from "../breadcrumb/breadcrumb.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent implements OnInit, OnDestroy {
  @Input() name!: string;

  constructor(private readonly breadcrumb: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumb.add(this.name);
  }

  ngOnDestroy(): void {
    this.breadcrumb.remove(this.name);
  }
}
