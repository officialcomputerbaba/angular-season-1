import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../interfaces";

@Pipe({
  name: "userPicture",
  pure: false,
})
export class UserPicturePipe implements PipeTransform {
  private cachedUrl!: string;
  private cachedLetter!: string;

  transform(user: User): string {
    const picture = user?.picture;

    if (this.cachedUrl && this.cachedUrl === picture?.link) {
      return this.cachedUrl;
    }

    if (picture && picture?.link) {
      this.cachedUrl = picture?.link as string;
      return this.cachedUrl;
    }

    return this.generateImageFromName(user.name);
  }

  private generateImageFromName(name: string): string {
    const letter = name && name?.length >= 1 ? name[0] : "x";

    if (this.cachedLetter?.toLowerCase() === letter?.toLowerCase()) {
      return this.cachedUrl;
    }

    this.cachedLetter = letter;

    const baseWidth = 200;
    const baseHeight = 200;
    const baseOffset = 40;
    const bg = "#c0392b";
    const fg = "#fff";

    const canvas = document.createElement("canvas");
    canvas.height = baseHeight;
    canvas.width = baseWidth;

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    ctx.font = "100pt Arial";
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, baseWidth, baseHeight);
    ctx.textAlign = "center";
    ctx.fillStyle = fg;
    ctx.fillText(letter.toUpperCase(), baseWidth / 2, baseHeight / 2 + baseOffset);
    ctx.fill();

    this.cachedUrl = canvas.toDataURL();

    return this.cachedUrl;
  }
}
