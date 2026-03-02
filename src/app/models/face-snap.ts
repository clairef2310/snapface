export class FaceSnap {

  location?: string;

  constructor(
    public title: string,
    public imageUrl: string,
    public description: string,
    public createdAt: Date,
    public snaps: number
  ) {}

  addSnaps() {
    this.snaps++;
  }

  removeSnaps() {
    this.snaps--;
  }

  setLocation(location: string){
    this.location = location;
  }
}
