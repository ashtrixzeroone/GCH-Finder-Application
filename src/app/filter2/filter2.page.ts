import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-filter2',
  templateUrl: './filter2.page.html',
  styleUrls: ['./filter2.page.scss'],
})
export class Filter2Page implements OnInit {

  constructor(private router: Router)  { }

  ngOnInit() {
  }
  ViewDetails9(){
    this.router.navigate(['/details9']);
  }
}
