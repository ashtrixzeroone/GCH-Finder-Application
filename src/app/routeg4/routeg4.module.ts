import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routeg4PageRoutingModule } from './routeg4-routing.module';

import { Routeg4Page } from './routeg4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Routeg4PageRoutingModule
  ],
  declarations: [Routeg4Page]
})
export class Routeg4PageModule {}
