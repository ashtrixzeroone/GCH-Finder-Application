import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routeg5',
  templateUrl: './routeg5.page.html',
  styleUrls: ['./routeg5.page.scss'],
})
export class Routeg5Page implements OnInit {

  sliderOpts = {
    zoom: {
      maxRatio: 2
    }
  };


  constructor() { }

  ngOnInit() {
  }

}
