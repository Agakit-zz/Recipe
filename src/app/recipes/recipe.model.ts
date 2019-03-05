export class Recipe {
  public name: string;
  public descriptioin: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.descriptioin = desc;
    this.imagePath = imagePath;
  }
}
