export default class Category {
  constructor(id, category, color, fontColor='black') {
    this.id = id;
    this.title = category;
    this.color = color;
    this.fontColor = fontColor;
  }
}