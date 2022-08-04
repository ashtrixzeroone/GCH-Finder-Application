import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routeg1PageRoutingModule } from './routeg1-routing.module';

import { Routeg1Page } from './routeg1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Routeg1PageRoutingModule
  ],
  declarations: [Routeg1Page]
})
export class Routeg1PageModule {}
