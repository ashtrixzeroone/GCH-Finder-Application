import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routeg9PageRoutingModule } from './routeg9-routing.module';

import { Routeg9Page } from './routeg9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Routeg9PageRoutingModule
  ],
  declarations: [Routeg9Page]
})
export class Routeg9PageModule {}
