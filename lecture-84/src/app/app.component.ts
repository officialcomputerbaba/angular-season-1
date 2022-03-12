import { Component, ViewChild } from "@angular/core";
import { FileChangedEvent, FileInputDirective } from "./file-input.directive";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  imageURL!: string;

  @ViewChild(FileInputDirective) finDirective!: FileInputDirective;

  onFileChanged(evt: FileChangedEvent) {
    this.imageURL = evt.url as string;
  }

  onFileInputError(msg: string) {
    alert(msg);
  }
}
