export class TODO {
  id: number;
  title: string = '';
  completed: boolean = false;
  editing: boolean = false;
  constructor(title: string, id: number) {
    this.title = title;
    this.id = id;
  }
}
