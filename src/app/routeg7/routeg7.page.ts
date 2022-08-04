import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routeg7',
  templateUrl: './routeg7.page.html',
  styleUrls: ['./routeg7.page.scss'],
})
export class Routeg7Page implements OnInit {

  sliderOpts = {
    zoom: {
      maxRatio: 2
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
