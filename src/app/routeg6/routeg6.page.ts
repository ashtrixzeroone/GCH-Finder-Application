import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routeg6',
  templateUrl: './routeg6.page.html',
  styleUrls: ['./routeg6.page.scss'],
})
export class Routeg6Page implements OnInit {

  sliderOpts = {
    zoom: {
      maxRatio: 2
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
