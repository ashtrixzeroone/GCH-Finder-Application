import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routeg7PageRoutingModule } from './routeg7-routing.module';

import { Routeg7Page } from './routeg7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Routeg7PageRoutingModule
  ],
  declarations: [Routeg7Page]
})
export class Routeg7PageModule {}
