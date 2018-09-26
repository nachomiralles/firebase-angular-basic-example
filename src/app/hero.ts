export class Hero {
  id: string;
  name: string;

  constructor(doc: any) {
    this.name = doc.name;
  }

  setId(newId: string){
    this.id = newId;
  }
}
