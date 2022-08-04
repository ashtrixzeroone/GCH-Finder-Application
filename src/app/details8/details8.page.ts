import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details8',
  templateUrl: './details8.page.html',
  styleUrls: ['./details8.page.scss'],
})
export class Details8Page implements OnInit {

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
    this.router.navigate(['/routeg8']);
  }
}
