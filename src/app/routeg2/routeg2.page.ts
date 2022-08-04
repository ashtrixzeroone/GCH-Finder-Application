import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routeg2',
  templateUrl: './routeg2.page.html',
  styleUrls: ['./routeg2.page.scss'],
})
export class Routeg2Page implements OnInit {

  sliderOpts = {
    zoom: {
      maxRatio: 2
    }
  };
  
  constructor() { }

  ngOnInit() {
  }

}
