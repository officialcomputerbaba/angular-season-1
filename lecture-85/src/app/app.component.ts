import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  onValueTrim(isTrimmed: boolean): void {
    console.log("Value trimmed", isTrimmed);
  }

  onCaseConvertion(isConverted: boolean): void {
    console.log("Case converted", isConverted);
  }
}
