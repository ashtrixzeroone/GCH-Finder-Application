import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routeg2PageRoutingModule } from './routeg2-routing.module';

import { Routeg2Page } from './routeg2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Routeg2PageRoutingModule
  ],
  declarations: [Routeg2Page]
})
export class Routeg2PageModule {}
