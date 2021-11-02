import { Component, OnDestroy } from "@angular/core";
// see `app.module.ts` file importing `ReactiveFormsModule`
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-compose",
  templateUrl: "./compose.component.html",
  styleUrls: ["./compose.component.css"],
})
export class ComposeComponent implements OnDestroy {
  msgForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.setState();
  }

  private setState() {
    const data = window.localStorage.getItem("message:compose");
    const content = data && data.trim().length ? JSON.parse(data) : {};

    this.msgForm = this.fb.group({
      email: [content.email],
      subject: [content.subject],
      message: [content.message],
    });
  }

  public saveState() {
    const content = this.msgForm.value;
    window.localStorage.setItem("message:compose", JSON.stringify(content));
  }

  ngOnDestroy() {
    this.saveState();
  }
}
