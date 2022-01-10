import { Component } from "@angular/core";
import { formatBytes } from "./utils/bytes.utils";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  baseCharge = 0.03;

  file!: File;

  sizeCharge: Function;

  constructor() {
    // binded context
    this.sizeCharge = this.getCharge.bind(this);
  }

  addFile(files: FileList | null) {
    this.file = files?.item(0) as File;
  }

  private getCharge(bytes: number = 0) {
    console.log("Called", bytes);

    const { size, unit } = formatBytes(bytes);

    const charge = size * this.baseCharge;

    return charge;
  }
}
