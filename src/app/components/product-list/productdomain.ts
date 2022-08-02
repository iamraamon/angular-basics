export class ProductDomain {
  public id: Number;
  public name: String;
  public model: String;
  public year: String;

  constructor(id: any, name: any, model: any, year: any) {
    this.id = id;
    this.name = name;
    this.model = model;
    this.year = year;
  }
}
