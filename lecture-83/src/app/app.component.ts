import { Component } from "@angular/core";
import { FileChangedEvent } from "./file-input.directive";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  imageURL!: string;

  onFileChanged(evt: FileChangedEvent) {
    this.imageURL = evt.url as string;
  }

  onFileInputError(msg: string) {
    alert(msg);
  }
}
