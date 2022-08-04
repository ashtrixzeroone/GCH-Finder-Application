import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details3',
  templateUrl: './details3.page.html',
  styleUrls: ['./details3.page.scss'],
})
export class Details3Page implements OnInit {

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
    this.router.navigate(['/routeg3']);
  }
}
