import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routeg1',
  templateUrl: './routeg1.page.html',
  styleUrls: ['./routeg1.page.scss'],
})
export class Routeg1Page implements OnInit {

  sliderOpts = {
    zoom: {
      maxRatio: 2
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
