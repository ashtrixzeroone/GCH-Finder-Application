import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details1',
  templateUrl: './details1.page.html',
  styleUrls: ['./details1.page.scss'],
})
export class Details1Page implements OnInit {

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
    this.router.navigate(['/routeg1']);
  }
}
