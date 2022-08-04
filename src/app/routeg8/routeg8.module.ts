import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routeg8PageRoutingModule } from './routeg8-routing.module';

import { Routeg8Page } from './routeg8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Routeg8PageRoutingModule
  ],
  declarations: [Routeg8Page]
})
export class Routeg8PageModule {}
