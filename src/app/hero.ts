export class Hero {
  id: string;
  newId: number;
  name: string;

  constructor(doc: any) {
    this.name = doc.name;
    if(doc.newId) this.newId = doc.newId;
  }

  setNewId(i: number){
    this.newId = i;
  }

  setFirebaseId(firebaseId: string){
    this.id = firebaseId;
  }
}
