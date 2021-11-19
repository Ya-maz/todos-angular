export class TODO {
    userId: number = 0;
    id: number = 0;
    title: string = '';
    completed: boolean = false;
    constructor(title: string, id: number, userId: number) {
      this.title = title;
      this.id = id;
      this.userId = userId;
    }
  }
  