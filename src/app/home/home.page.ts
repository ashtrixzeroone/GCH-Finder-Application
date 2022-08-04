import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  

  constructor(private router: Router)  { }
  
  ngOnInit() {

}
ViewDetails(){
  this.router.navigate(['/details']);
}
ViewDetails1(){
  this.router.navigate(['/details1']);
}
ViewDetails2(){
  this.router.navigate(['/details2']);
}
ViewDetails3(){
  this.router.navigate(['/details3']);
}
ViewDetails4(){
  this.router.navigate(['/details4']);
}
ViewDetails5(){
  this.router.navigate(['/details5']);
}
ViewDetails6(){
  this.router.navigate(['/details6']);
}
ViewDetails7(){
  this.router.navigate(['/details7']);
}
ViewDetails8(){
  this.router.navigate(['/details8']);
}
ViewDetails9(){
  this.router.navigate(['/details9']);
}

}