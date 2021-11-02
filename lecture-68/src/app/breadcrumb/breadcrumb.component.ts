import { Component, OnInit } from "@angular/core";

import { BreadcrumbService } from "./breadcrumb.service";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.css"],
})
export class BreadcrumbComponent implements OnInit {
  paths: string[] = [];

  constructor(private readonly breadcrumb: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumb.pathEvent$.subscribe((paths) => {
      this.paths = paths;
    });
  }
}
