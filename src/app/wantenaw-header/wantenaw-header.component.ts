import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wantenaw-header',
  templateUrl: './wantenaw-header.component.html',
  styleUrls: ['./wantenaw-header.component.css']
})
export class WantenawHeaderComponent implements OnInit {

  login = "wantenaw";
  id = 991512290;

  constructor() { }

  ngOnInit(): void {
  }

}
