import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routeg',
  templateUrl: './routeg.page.html',
  styleUrls: ['./routeg.page.scss'],
})
export class RoutegPage implements OnInit {

  sliderOpts = {
    zoom: {
      maxRatio: 2
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
