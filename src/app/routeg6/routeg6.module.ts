import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routeg6PageRoutingModule } from './routeg6-routing.module';

import { Routeg6Page } from './routeg6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Routeg6PageRoutingModule
  ],
  declarations: [Routeg6Page]
})
export class Routeg6PageModule {}
