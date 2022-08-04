import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routeg3',
  templateUrl: './routeg3.page.html',
  styleUrls: ['./routeg3.page.scss'],
})
export class Routeg3Page implements OnInit {
  
  sliderOpts = {
    zoom: {
      maxRatio: 2
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
