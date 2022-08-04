import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routeg8',
  templateUrl: './routeg8.page.html',
  styleUrls: ['./routeg8.page.scss'],
})
export class Routeg8Page implements OnInit {

  sliderOpts = {
    zoom: {
      maxRatio: 2
    }
  };


  constructor() { }

  ngOnInit() {
  }

}
