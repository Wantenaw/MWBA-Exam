import { Component, OnInit, Input } from '@angular/core';
import { FINAL2020 } from '../interface991512290';
import { FINALQUIZ } from '../interface991512290';

@Component({
  selector: 'app-wantenaw-tab2',
  templateUrl: './wantenaw-tab2.component.html',
  styleUrls: ['./wantenaw-tab2.component.css']
})
export class WantenawTab2Component implements OnInit {

  @Input() final2020: FINAL2020;
  @Input() finalQuiz: FINALQUIZ[];

  constructor() { }

  ngOnInit(): void {
  }

}
