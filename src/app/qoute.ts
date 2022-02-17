export class Qoute {

  upVote: number;
  downVote:number;
  
    showDescription: boolean;
  constructor(public id: number,public name: string,public description: string,public author: string){
    this.showDescription=false;
    this.upVote = 0;
    this.downVote = 0;

  }
  


}
