 export class Joke {
    public setup: string;
    public punchline: string;
    public hide: boolean;
    public createdDate: Date;
  
    constructor(setup: string, punchline: string) {
      this.setup = setup;
      this.punchline = punchline;
      this.hide = true;
      const str = '2024-07-21';

            const date = new Date(str);
      this.createdDate= date;
    }
  
    toggle() {
      this.hide = !this.hide;
    }
  }