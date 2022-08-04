import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details5',
  templateUrl: './details5.page.html',
  styleUrls: ['./details5.page.scss'],
})
export class Details5Page implements OnInit {

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
    this.router.navigate(['/routeg5']);
  }
}
