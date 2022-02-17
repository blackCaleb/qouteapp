import { Component, OnInit } from '@angular/core';
import { Qoute } from '../qoute'

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
  qoutes :Qoute[] = [
    new Qoute (1,'Seek and you will find','make the effort and you will see results','William'),
    new Qoute(2,'where there is a will,there is a way','nothing is impossible with the right effort','Henrick'),
     new Qoute(3,'Dont cry over split milk','theres no need crying over past mistakes','John')
   ]
  
  addNewQoute(qoute){
    let qouteLength = this.qoutes.length;
    qoute.id = qouteLength+1;
    this.qoutes.push(qoute)
  }
  constructor() { }

  ngOnInit() {
  }

}
