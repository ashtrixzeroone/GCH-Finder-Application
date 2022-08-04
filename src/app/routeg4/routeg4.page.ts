import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routeg4',
  templateUrl: './routeg4.page.html',
  styleUrls: ['./routeg4.page.scss'],
})
export class Routeg4Page implements OnInit {

  sliderOpts = {
    zoom: {
      maxRatio: 2
    }
  };


  constructor() { }

  ngOnInit() {
  }

}
