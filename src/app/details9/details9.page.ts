import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details9',
  templateUrl: './details9.page.html',
  styleUrls: ['./details9.page.scss'],
})
export class Details9Page implements OnInit {

  constructor(private router: Router)  { }

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true,
  }

  ngOnInit() {
  }
  ViewRouteG(){
    this.router.navigate(['/routeg9']);
  }
}
