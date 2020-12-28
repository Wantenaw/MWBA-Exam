import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wantenaw-tab1',
  templateUrl: './wantenaw-tab1.component.html',
  styleUrls: ['./wantenaw-tab1.component.css']
})
export class WantenawTab1Component implements OnInit {

  @Input() program='Computer Programming';

  myNumber = '991512290';
  myLabel = 'Willem Wantenaar';
  now = new Date();

  currentExamDate(){
    this.myLabel = `Exam Date: ${ this.now } for ${ this.myNumber }`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
