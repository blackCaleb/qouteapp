import { Component, OnInit } from '@angular/core';
import { Qoute } from '../qoute';

@Component({
  selector: 'app-qoute-list',
  templateUrl: './qoute-list.component.html',
  styleUrls: ['./qoute-list.component.css']
})
export class QouteListComponent implements OnInit {
  qoutes :Qoute[] = [
   new Qoute (1,'Some people do not like change','but you need to embrace change if the alternative is disaster','Elon Musk'),
   new Qoute(2,'Human Stupidity', 'that is why Hackers always win','Med Amine Khelifi'),
    new Qoute(3,'The quieter you become','the more you are able to hear…','Kali Linux')
  ]
  toggleDetails(index) {
    this.qoutes[index].showDescription = !this.qoutes[index].showDescription;

  }
  uselessQoute(isUseless,index){
    if(isUseless){
      this.qoutes.splice(index,1);
    }
  }
  addNewQoute(qoute){
    let qouteLength = this.qoutes.length;
    qoute.id = qouteLength+1;
    this.qoutes.push(qoute)
  }
  upVote(index){
    this.qoutes[index].upVote +=1;
  }
  downVote(index){
    this.qoutes[index].downVote +=1;
  }
  
  
  

  constructor() {}

  ngOnInit () {

  }
      
  
  
 

}
